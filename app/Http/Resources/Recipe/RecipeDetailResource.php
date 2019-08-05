<?php
/**
 * Created by PhpStorm.
 * User: dev001
 * Date: 2/20/19
 * Time: 6:01 PM
 */

namespace App\Http\Resources\Recipe;

use Illuminate\Http\Resources\Json\JsonResource;

class RecipeDetailResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'fat' => $this->fat,
            'carbs' => $this->carbs,
            'protein' => $this->protein,
            'calorie' => $this->calorie,
            'preparation_time' => $this->preparation_time
        ];
    }
}
