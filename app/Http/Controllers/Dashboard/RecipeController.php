<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Requests\StoreRecipeRequest;
use App\Models\IngredientTranslation;
use App\Models\Language;
use App\Models\NationTranslation;
use App\Models\Unit;
use App\Models\UnitTranslation;
use App\Repositories\Contracts\RecipeRepositoryInterface;
use App\Services\Recipe\Contracts\RecipeService;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class RecipeController extends Controller
{

    /**
     * Directory to Recipe related blade files
     *
     * @var string
     */
    protected $viewPath = 'dashboard.recipe';

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view($this->view('index'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view($this->view('create'), [
            'units' => $this->getUnitsJson(),
            'nations' => $this->getNationsJson(),
            'ingredients' => $this->getIngredientsJson()
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param StoreRecipeRequest $request
     * @param RecipeService      $recipeService
     *
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function store(StoreRecipeRequest $request, RecipeService $recipeService)
    {
        $data = array_add(
            $request->toArray(),
            'nation_id',
            $this->getNationIdByName($request->input('nation'))
        );

        $data = array_set($data, 'is_confirmed', true);
        $data = array_add($data, 'owner_id', Auth::id());
        $data = $this->convertCheckbox($data, 'is_pinned');
        $data = $this->convertCheckbox($data, 'is_active');

        $recipeService->store($data);

        return view($this->view('index'));
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int                      $id
     * @param RecipeRepositoryInterface $recipeRepository
     *
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function edit($id, RecipeRepositoryInterface $recipeRepository)
    {

        $recipe = $recipeRepository
            ->with([
                'difficulty',
                'image',
                'detail',
                'directions',
                'categories',
                'ingredients',
                'nation'
            ])
            ->find($id);
        $options = $this->getDifficultyOptions();

        foreach ($options as $option){
            if($recipe->difficulty->level == $option['value']){
                $option['selected'] = true;
            }
        }

        return view($this->view('edit'), [
            'recipe' => $recipe,
            'options'=> $options,
            'units' => $this->getUnitsJson(),
            'nations' => $this->getNationsJson(),
            'nation' => $recipe->nation ? $recipe->nation->translation('name', Language::UZBEK) : null,
            'ingredient' => $this->getRecipeIngredientJson($recipe),
            'ingredients' => $this->getIngredientsJson(),
            'directions' => $this->getRecipeDirectionsJson($recipe)
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param StoreRecipeRequest $request
     * @param RecipeService      $recipeService
     * @param  int               $id
     *
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function update(
        StoreRecipeRequest $request,
        RecipeService $recipeService,
        $id
    ) {
        $data = array_add(
            $request->toArray(),
            'nation_id',
            $this->getNationIdByName($request->input('nation'))
        );

        $data = $this->convertCheckbox($data, 'is_pinned');
        $data = $this->convertCheckbox($data, 'is_active');

        $recipeService->update($id, $data);

        return view($this->view('index'));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int          $id
     * @param RecipeService $recipeService
     *
     * @return \Illuminate\Http\RedirectResponse
     */
    public function destroy($id, RecipeService $recipeService)
    {
        $recipeService->delete($id);

        return redirect()->route('dashboard.recipes.index');
    }

    private function convertCheckbox(array $data, $field)
    {
        array_get($data, $field) == "on"
        ? array_set($data, $field, true)
        : array_set($data, $field, false);

        return $data;
    }

    private function getNationIdByName($name)
    {
        $nation = NationTranslation::where([
            ['lang_id', Language::ID_UZBEK],
            ['name', $name]
        ])->first();

        return $nation ? $nation->nation_id : null;
    }

    private function getDifficultyOptions()
    {
        return [
            [
                'text'  => 'easy',
                'value' => 1,
                'selected' => false
            ],
            [
                'text'  => 'medium',
                'value' => 2,
                'selected' => false
            ],
            [
                'text'  => 'hard',
                'value' => 3,
                'selected' => false
            ],
            [
                'text'  => 'professional',
                'value' => 4,
                'selected' => false
            ],
        ];
    }

    private function getNationsJson()
    {
        return json_encode(
            NationTranslation::where('lang_id', Language::ID_DEFAULT)
                ->pluck('name')->toArray()
        );
    }

    private function getIngredientsJson()
    {
        return json_encode(
            IngredientTranslation::where('lang_id', Language::ID_DEFAULT)
            ->pluck('name')->toArray()
        );
    }

    private function getUnitsJson()
    {
        return json_encode(
            UnitTranslation::where('lang_id', Language::ID_DEFAULT)
            ->pluck('name')->toArray()
        );
    }

    private function getRecipeIngredientJson($recipe)
    {
        $result = [];

        foreach ($recipe->ingredients as $ingredient){
            $pivot = DB::table('preparation')
                ->where([['recipe_id', $recipe->id],['ingredient_id', $ingredient->id]])
                ->select('unit_id','amount')->first();

            $result[] = [
                'ingredient' => $ingredient->translation('name', Language::DEFAULT),
                'unit' => $pivot->unit_id ? Unit::find($pivot->unit_id)->translation('name', Language::DEFAULT) : null,
                'amount' => $pivot->amount
            ];
        }

        return json_encode($result);
    }

    private function getRecipeDirectionsJson($recipe)
    {
        $result = [];

        $directions = $recipe->directions;

        foreach ($directions as $direction){
            $result[] = [
                'id'    =>  $direction->id,
                'order' =>  $direction->order,
                'body'  => [
                    'uz' => $direction->translation('body', Language::UZBEK),
                    'en' => $direction->translation('body', Language::ENGLISH),
                    'ru' => $direction->translation('body', Language::RUSSIAN)
                ],
                'image' => $direction->image ? asset("storage/" . $direction->image->thumbnail) : null
            ];
        }
        return json_encode($result);
    }
}
