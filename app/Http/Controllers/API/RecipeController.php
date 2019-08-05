<?php

namespace App\Http\Controllers\API;


use App\Http\Requests\PostRecipeRequest;
use App\Http\Resources\Recipe\RecipeCollection;
use App\Http\Resources\Recipe\RecipeResource;
use App\Repositories\Contracts\RecipeRepositoryInterface;
use App\Services\Recipe\Contracts\RecipeService;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Log\Logger;

class RecipeController extends Controller
{
    private $logger;

    private $recipeService;

    public function __construct(
        Logger $logger,
        RecipeService $recipeService
    ) {
        $this->logger = $logger;
        $this->recipeService = $recipeService;
    }

    public function index(
        Request $request,
        RecipeRepositoryInterface $recipeRepository
    ) {
        $title = $request->query('title');
        $activeConfirmedRecipes = $recipeRepository->filterActiveRecipes()->filterConfirmedRecipes();

        if ($title) {
            $recipes = $activeConfirmedRecipes
                ->getWhereNameLike($title)
                ->with(['detail','directions','ingredients','images','categories'])
                ->paginate();
        } else {
            $recipes = $activeConfirmedRecipes
                ->with(['detail','directions','ingredients','images','categories'])
                ->paginate();
        }

        return new RecipeCollection(
            $recipes,
            true
        );
    }

    public function show(
        Request $request,
        RecipeRepositoryInterface $recipeRepository
    ) {
        $id = $request->route('id');

        try{
            $recipe = $recipeRepository->find($id);
            return new RecipeResource($recipe, true);
        }catch (ModelNotFoundException $modelNotFoundException){
            return response()->json([
                'message' => __('api.errors.not_found'),
                'code' => Response::HTTP_NOT_FOUND
            ],400);
        }
    }

    public function store(PostRecipeRequest $request)
    {
        $recipe = $this->recipeService->storeRecipeApi($request->toArray(), 1);

        if (empty($recipe))
            return "null";

        return new RecipeResource($recipe, true);
    }
}
