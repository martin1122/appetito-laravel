<?php

namespace App\Http\Resources\Category;

use App\Http\Resources\Traits\ResponseWithPayload;
use Illuminate\Http\Resources\Json\JsonResource;

class CategoryResource extends JsonResource
{
    use ResponseWithPayload;

    public function getPayload()
    {
        return [
            'id' => $this->id,
            'slug' => $this->slug,
            'name' => $this->name,
            'description' => $this->description
        ];
    }
}
