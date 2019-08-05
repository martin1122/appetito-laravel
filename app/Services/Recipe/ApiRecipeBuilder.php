<?php

namespace App\Services\Recipe;

use App\Models\Recipe;
use App\Repositories\Contracts\IngredientRepositoryInterface;
use App\Repositories\Contracts\RecipeRepositoryInterface;
use App\Repositories\Contracts\UnitRepositoryInterface;
use App\Services\Direction\Contracts\DirectionService;
use App\Services\Recipe\Contracts\RecipeBuilder;
use Vinkla\Hashids\HashidsManager;

class ApiRecipeBuilder implements RecipeBuilder
{
    /**
     * @var Recipe
     */
    protected $recipe;

    /**
     * @var RecipeRepositoryInterface
     */
    protected $recipeRepository;

    /**
     * @var UnitRepositoryInterface
     */
    protected $unitRepository;

    /**
     * @var IngredientRepositoryInterface
     */
    protected $ingredientRepository;

    /**
     * @var DirectionService
     */
    protected $directionService;

    /**
     * @var HashidsManager
     */
    protected $hashManager;

    public function __construct(
        RecipeRepositoryInterface $recipeRepository,
        UnitRepositoryInterface $unitRepository,
        IngredientRepositoryInterface $ingredientRepository,
        DirectionService $directionService,
        HashidsManager $hashManager
    ) {
        $this->recipeRepository = $recipeRepository;
        $this->unitRepository = $unitRepository;
        $this->ingredientRepository = $ingredientRepository;
        $this->directionService = $directionService;
        $this->hashManager = $hashManager;
    }

    /**
     * Create plain Recipe
     *
     * @param array $data
     * @param int   $userId
     */
    public function createRecipe(array $data, int $userId)
    {
        $this->recipe = $this->recipeRepository->create(
            array_collapse([
                [
                    'is_confirmed' => true,
                    'owner_id' => $userId
                ],
                array_only($data, ['title', 'description'])
            ])
        );

        $this->recipe->hash = $this->hashManager->encode($this->recipe->id);
        $this->recipe->save();
        $this->recipe->detail()->create(
            array_only(array_get($data, 'details'),
                ['fat', 'carbs', 'protein', 'calorie', 'preparation_time']
            )
        );
    }

    /**
     * @param array $directions
     */
    public function addDirections(array $directions)
    {
        if ($directions) {
            foreach ($directions as $direction){
                $this->directionService->store(array_collapse([
                    ['recipe_id' => $this->recipe->id],
                    $direction
                ]));
            }
        }
    }

    /**
     * @param array $categories
     */
    public function addCategories(array $categories)
    {
        $this->recipe->categories()->attach($categories);
    }

    /**
     * @param array $ingredients
     */
    public function addIngredients(array $ingredients)
    {
        [
            'ingredients' => [
                0 => [
                    'id' => 23,
                    'name' => 'bread',
                    'amount' => 200,
                    'unit' => [
                        'id' => 5,
                        'name' => 'kg'
                    ]
                ],
                1 => [
                    'id' => null,
                    'name' => 'salt',
                    'amount' => null,
                    'unit' => null
                ],
                2 => [
                    'id' => null,
                    'name' => 'water',
                    'amount' => 100,
                    'unit' => [
                        'id' => 2,
                        'name' => 'gr'
                    ]
                ],
                3 => [
                    'id' => null,
                    'name' => 'water',
                    'amount' => 100,
                    'unit' => [
                        'id' => null,
                        'name' => 'gr'
                    ]
                ],
            ]
        ];

        foreach ($ingredients as $ingredientData)
        {
            $this->recipe->ingredients()->attach(
                $this->getIngredientId($ingredientData),
                [
                    'amount' => array_get($ingredientData, 'amount'),
                    'unit_id' => $this->getUnitId($ingredientData)
                ]
            );
        }
    }

    /**
     * @param array $images
     */
    public function addImages(array $images)
    {
        $this->recipe->images()->attach($images);
    }

    /**
     * Get ready recipe
     *
     * @return Recipe
     */
    public function getRecipe()
    {
        return $this->recipe;
    }

    /**
     * @param array $ingredientData
     *
     * @return mixed
     */
    private function getUnitId(array $ingredientData)
    {
        if (empty($ingredientData['unit'])) {

            if (empty($ingredientData['id']))
                return null;

            $ingredient = $this->ingredientRepository->find($ingredientData['id']);

            return $ingredient->unit->id;
        } else {
            $unit = $this->unitRepository->firstOrCreate([
                'name' => array_get($ingredientData, 'unit.name')
            ]);
            return $unit->id;
        }
    }

    /**
     * @param array $ingredientData
     *
     * @return mixed
     */
    private function getIngredientId(array $ingredientData)
    {
        if (!empty($ingredientData['id'])) {
            return $ingredientData['id'];
        } else {
            $ingredient = $this->ingredientRepository->firstOrCreate([
                'name' => array_get($ingredientData, 'name')
            ]);
            return $ingredient->id;
        }
    }
}
