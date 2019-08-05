<?php

namespace App\Models;

use App\Traits\Translatable;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    protected $fillable = [
        'slug',
        'name',
        'description',
        'image_id'
    ];

    public function recipes()
    {
        return $this->belongsToMany(Recipe::class);
    }
}
