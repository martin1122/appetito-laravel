<?php

namespace App\Http\Controllers\API;


use App\Http\Resources\Ingredient\IngredientCollection;
use App\Http\Resources\Ingredient\IngredientResource;
use App\Models\Language;
use App\Repositories\Contracts\IngredientRepositoryInterface;
use Illuminate\Http\Request;

class IngredientController extends Controller
{
    public function index(
        Request $request,
        IngredientRepositoryInterface $ingredientRepository
    ) {
        $name = $request->query('name');

        if($name){
            return new IngredientCollection(
                $ingredientRepository
                    ->getWhereNameLike($name)
                    ->paginate()
            );
        }else {
            return new IngredientCollection($ingredientRepository->paginate());
        }
    }

    public function show(
        Request $request,
        IngredientRepositoryInterface $ingredientRepository
    ) {
        $id = $request->route('id');

        return (new IngredientResource($ingredientRepository->find($id)));
    }
}
