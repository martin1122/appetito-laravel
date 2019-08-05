<?php

namespace App\Repositories;


use App\Models\Ingredient;
use App\Repositories\Contracts\IngredientRepositoryInterface;

class IngredientRepository extends CoolRepository implements IngredientRepositoryInterface
{

    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return Ingredient::class;
    }

    public function getWhereNameLike($name)
    {
        $this->reset();

        return $this->model->where('name', 'like', "%{$name}%");
    }
}
