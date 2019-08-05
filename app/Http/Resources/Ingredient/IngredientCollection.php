<?php

namespace App\Http\Resources\Ingredient;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\ResourceCollection;
use Illuminate\Support\Collection;

class IngredientCollection extends ResourceCollection
{
    public $collects = IngredientResource::class;

    /**
     * Transform the resource collection into an array.
     *
     * @param  Request  $request
     *
     * @return Collection
     */
    public function toArray($request)
    {
        return $this->collection;
    }
}
