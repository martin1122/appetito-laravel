<?php

use Faker\Generator as Faker;

$factory->define(\App\Models\Category::class, function (Faker $faker) {
    return [
        'name' => $faker->domainWord,
        'description' => $faker->realText(40)
    ];
});
