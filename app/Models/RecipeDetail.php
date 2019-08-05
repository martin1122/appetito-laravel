<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class RecipeDetail extends Model
{
    protected $fillable = [
        'fat',
        'carbs',
        'calorie',
        'protein',
        'preparation_time'
    ];

    public function recipe()
    {
        return $this->belongsTo(Recipe::class);
    }
}
