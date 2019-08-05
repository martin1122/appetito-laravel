<?php

namespace App\Http\Resources\Recipe;

use App\Http\Resources\Category\CategoryCollection;
use App\Http\Resources\Direction\DirectionCollection;
use App\Http\Resources\Image\ImageCollection;
use App\Http\Resources\Ingredient\IngredientCollection;
use App\Http\Resources\Ingredient\PreparationCollection;
use App\Http\Resources\Traits\ResponseWithPayload;
use Illuminate\Http\Resources\Json\JsonResource;

class RecipeResource extends JsonResource
{
    use ResponseWithPayload;

    public function getPayload()
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'description' => $this->description,
            'details' => new RecipeDetailResource($this->detail),
            'categories' => new CategoryCollection($this->categories),
            'ingredients' => new PreparationCollection($this->ingredients),
            'directions' => new DirectionCollection($this->directions),
            'images' => new ImageCollection($this->images)
        ];
    }
}
