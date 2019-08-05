<?php

namespace App\Models;

use App\Traits\Translatable;
use Illuminate\Database\Eloquent\Model;

class Direction extends Model
{
    protected $fillable = [
        'order',
        'body',
        'image_id',
        'recipe_id'
    ];

    public function image()
    {
        return $this->belongsTo(Image::class);
    }

    public function recipe()
    {
        return $this->belongsTo(Recipe::class);
    }
}
