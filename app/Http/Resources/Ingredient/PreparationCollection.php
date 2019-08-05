<?php

namespace App\Http\Resources\Ingredient;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\ResourceCollection;
use Illuminate\Support\Collection;

class PreparationCollection extends ResourceCollection
{
    /**
     * @var string
     */
    public $collects = PreparationResource::class;

    /**
     * @param Request $request
     *
     * @return array|Collection
     */
    public function toArray($request)
    {
        return $this->collection;
    }
}
