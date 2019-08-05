<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Ingredient extends Model
{
    protected $fillable = [
        'unit_id',
        'price',
        'name'
    ];

    public function unit()
    {
        return $this->belongsTo(Unit::class);
    }

    public function recipes()
    {
        return $this->belongsToMany(Recipe::class, 'preparation')->withPivot('unit_id', 'amount');
    }
}
