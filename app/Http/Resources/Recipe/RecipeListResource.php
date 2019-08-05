<?php
/**
 * Created by PhpStorm.
 * User: dev001
 * Date: 2/21/19
 * Time: 2:19 PM
 */

namespace App\Http\Resources\Recipe;

use App\Http\Resources\Nation\NationResource;
use Illuminate\Http\Resources\Json\JsonResource;

class RecipeListResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'description' => $this->description,
            'details' => new RecipeDetailResource($this->detail),
            'nation' => new NationResource($this->nation),
        ];
    }
}
