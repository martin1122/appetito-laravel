<?php

use Faker\Generator as Faker;

$factory->define(App\Models\Direction::class, function (Faker $faker) {
    static $order = 1;
    return [
        'order' => $order++,
        'image_id' => factory(\App\Models\Image::class)->create()->id,
    ];
});

$factory->afterCreating(App\Models\Direction::class, function ($recipe, $faker) {
    $recipe->translations()->create([
        'body' => $faker->realText(200, 2),
        'lang_id' => \App\Models\Language::ID_UZBEK
    ]);
    $recipe->translations()->create([
        'body' => $faker->realText(200, 2),
        'lang_id' => \App\Models\Language::ID_ENGLISH
    ]);
    $recipe->translations()->create([
        'body' => $faker->realText(200, 2),
        'lang_id' => \App\Models\Language::ID_RUSSIAN
    ]);
});
