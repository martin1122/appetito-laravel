<?php
/**
 * Created by PhpStorm.
 * User: dev001
 * Date: 2/6/19
 * Time: 3:56 PM
 */

namespace App\Http\Controllers\Ajax\Dashboard;


use App\Http\Controllers\Controller;
use App\Models\Language;
use App\Repositories\Contracts\CollectionRepositoryInterface;
use App\Repositories\Contracts\RecipeRepositoryInterface;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class CollectionController extends Controller
{
    public function findRecipe(
        Request $request,
        RecipeRepositoryInterface $recipeRepository
    ) {
        $name = $request->query('name');
        return $recipeRepository->getByNameContains($name, Language::ID_DEFAULT);
    }

    public function addRecipeToCollection(
        Request $request,
        RecipeRepositoryInterface $recipeRepository
    ) {
        $recipe = $recipeRepository->find($request->input('recipe_id'));
        if(!$recipe){
            return response()->json([
                'added' => false
            ]);
        }

        $recipe->collections()->attach($request->input('collection_id'));

        return response()->json([
            'added' => true
        ]);
    }

    public function removeRecipeToCollection(
        Request $request,
        RecipeRepositoryInterface $recipeRepository
    ) {
        $recipe = $recipeRepository->find($request->input('recipe_id'));
        if(!$recipe){
            return response()->json([
                'removed' => false
            ]);
        }

        $recipe->collections()->detach($request->input('collection_id'));

        return response()->json([
            'removed' => true
        ]);
    }

    public function listRecipesInCollection(
        Request $request,
        RecipeRepositoryInterface $recipeRepository,
        CollectionRepositoryInterface $collectionRepository
    ) {
        $collection = $collectionRepository->find($request->route('id'));

        return $recipeRepository->getNameByIdsContains(
            $collection->recipes()->pluck('id')->toArray(),
            Language::ID_DEFAULT
        );
    }
}
