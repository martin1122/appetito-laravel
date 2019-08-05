<?php

namespace App\Http\Resources\Ingredient;

use App\Http\Resources\Unit\UnitResource;
use App\Models\Unit;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class PreparationResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'hash' => $this->hash,
            'name'  => $this->name,
            'unit' => new UnitResource(Unit::find($this->pivot->unit_id)),
            'price' => $this->price
        ];
    }
}
