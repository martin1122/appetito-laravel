<?php

namespace App\Models;

use App\Traits\Translatable;
use Illuminate\Database\Eloquent\Model;

class Recipe extends Model
{
    protected $fillable = [
        'is_confirmed',
        'is_active',
        'is_pinned',
        'owner_id',
        'difficulty_id',
        'nation_id',
        'title',
        'description'
    ];

    /**
     * Difficulty level of a recipe
     */
    public function difficulty()
    {
        return $this->belongsTo(Difficulty::class);
    }

    /**
     * Owner of a recipe
     */
    public function owner()
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Details of a recipe
     */
    public function detail()
    {
        return $this->hasOne(RecipeDetail::class);
    }

    /**
     * Directions of a recipe
     */
    public function directions()
    {
        return $this->hasMany(Direction::class);
    }

    /**
     * Categories of a recipe
     */
    public function categories()
    {
        return $this->belongsToMany(Category::class);
    }

    /**
     * Ingredients of a recipe
     */
    public function ingredients()
    {
        return $this->belongsToMany(Ingredient::class, 'preparation')->withPivot('unit_id', 'amount');
    }

    /**
     * Images of a recipe
     */
    public function images()
    {
        return $this->belongsToMany(Image::class, 'recipe_images');
    }

    /**
     * Nation of a recipe
     */
    public function nation()
    {
        return $this->belongsTo(Nation::class);
    }
}
