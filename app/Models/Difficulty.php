<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Difficulty extends Model
{
    const ID_EASY = 1;
    const ID_MEDIUM = 2;
    const ID_HARD = 3;
    const ID_PROFESSIONAL = 4;

    const LEVEL_EASY = 1;
    const LEVEL_MEDIUM = 2;
    const LEVEL_HARD = 3;
    const LEVEL_PROFESSIONAL = 4;

    protected $fillable = ['name', 'level'];

    public function recipes(){
        $this->hasMany(Recipe::class);
    }
}
