<?php

namespace App\Http\Resources\Ingredient;

use App\Http\Resources\Traits\ResponseWithPayload;
use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\Unit\UnitResource;

class IngredientResource extends JsonResource
{
    use ResponseWithPayload;

    /**
     * @return array
     */
    public function getPayload()
    {
        return [
            'id' => $this->id,
            'hash' => $this->hash,
            'name'  => $this->name,
            'unit' => new UnitResource($this->unit),
            'price' => $this->price
        ];
    }
}
