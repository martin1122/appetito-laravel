<?php

use Faker\Generator as Faker;

$factory->define(App\Models\RecipeDetail::class, function (Faker $faker) {
    return [
        'fat' => rand(50, 700),
        'carbs' => rand(50, 700),
        'protein' => rand(50, 700),
        'calorie' => rand(50, 700),
        'preparation_time' => rand(1, 200),
    ];
});
