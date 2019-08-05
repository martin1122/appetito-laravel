<?php
/**
 * Created by PhpStorm.
 * User: dev001
 * Date: 1/25/19
 * Time: 3:55 PM
 */

namespace Tests\Functional\Dashboard\Services;


use App\Models\Difficulty;
use App\Models\Language;
use App\Models\Nation;
use App\Models\Recipe;
use App\Repositories\Contracts\UserRepositoryInterface;
use App\Services\Recipe\Contracts\RecipeService;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use Tests\Functional\TestCase;
use Tests\Traits\HandleMockData;

class RecipeServiceTest extends TestCase
{
    use HandleMockData;

    private $user;

    private $recipeService;

    public function setUp()
    {
        parent::setUp();

        $this->user = app(UserRepositoryInterface::class)->first();
        $this->recipeService = app(RecipeService::class);
    }

    public function testStore()
    {
        $forStoring = $this->getRecipeData();
        $recipe = $this->recipeService->store($forStoring);
        $this->assertInstanceOf(Recipe::class, $recipe);
        $this->seeInDatabase('recipes', array_collapse([
            [
                'id' => $recipe->id
            ],array_only($forStoring, [
                'is_confirmed',
                'is_active',
                'is_pinned',
                'owner_id',
                'difficulty_id',
                'nation_id'
            ])
        ]))
            ->seeInDatabase('recipe_details', array_only($forStoring, [
                'fat',
                'carbs',
                'protein',
                'calorie',
                'preparation_time'
            ]))
            ->seeInDatabase('images', [
                'id' => $recipe->image->id,
                'slug' => $recipe->image->slug,
                'url' => $recipe->image->url,
                'thumbnail' => $recipe->image->thumbnail,
                'media_type' => $recipe->image->media_type
            ]);

        $this->assertTrue(Storage::exists($recipe->image->url));
        $this->assertTrue(Storage::exists($recipe->image->thumbnail));

        foreach (array(Language::UZBEK, Language::RUSSIAN, Language::ENGLISH) as $shortName){
            $this->seeInDatabase('recipe_translations', [
                'name' => array_get($forStoring, "name.$shortName"),
                'description' => array_get($forStoring, "description.$shortName")
            ]);
        }

        foreach ($recipe->directions as $direction){
            $this->seeInDatabase('directions', [
                'id' => $direction->id,
                'order' => $direction->order,
                'recipe_id' => $recipe->id
            ])
                ->seeInDatabase('direction_translations', [
                    'body' => $direction->translation('body', Language::DEFAULT)
                ]);

            if($direction->image){
                $this->seeInDatabase('images', [
                    'id' => $direction->image->id,
                    'slug' => $direction->image->slug,
                    'url' => $direction->image->url,
                    'thumbnail' => $direction->image->thumbnail,
                    'media_type' => $direction->image->media_type
                ]);

                $this->assertTrue(Storage::exists($direction->image->url));
                $this->assertTrue(Storage::exists($direction->image->thumbnail));
            }
        }

        foreach ($recipe->ingredients as $ingredient) {
            $this->seeInDatabase('ingredients', [
                'id' => $ingredient->id
            ])
                ->seeInDatabase('ingredient_translations', [
                    'name' => $ingredient->translation('name', Language::DEFAULT)
                ])
                ->seeInDatabase('preparation', [
                    'recipe_id' => $recipe->id,
                    'ingredient_id' => $ingredient->id
                ]);
        }
    }

    private function getRecipeData()
    {
        $nation = Nation::first();

        return [
            'name' => $this->getTranslations(),
            'description' => $this->getTranslations(),
            'is_confirmed' => true,
            'is_active' => true,
            'is_pinned' => false,
            'owner_id' => $this->user->id,
            'difficulty_id' => Difficulty::ID_HARD,
            'nation_id'  => $nation ? $nation->id : null,
            'image' => $this->getUploadImage('avatar.png'),
            'details' => [
                'fat' => rand(30.0, 300.0),
                'carbs' => rand(30.0, 300.0),
                'protein' => rand(30.0, 300.0),
                'calorie' => rand(30.0, 300.0),
                'preparation_time' => rand(1, 200),
            ],
            'directions' => [
                1 => [
                    'body' => $this->getTranslations(200),
                    'image' => $this->getUploadImage('direction1.png')
                ],
                2 => [
                    'body' => $this->getTranslations(200)
                ],
                3 => [
                    'body' => $this->getTranslations(200),
                    'image' => $this->getUploadImage('direction1.png')
                ]
            ],
            'ingredients' => [
                0 => [
                    'name' => 'sabzi',
                    'amount' => 2,
                    'unit_id' => 'ta'
                ],
                1 => [
                    'name' => 'suv',
                ],
                2 => [
                    'name' => 'pista',
                    'amount' => 0.2,
                    'unit_id' => 'tonna'
                ]
            ]
        ];
    }
}
