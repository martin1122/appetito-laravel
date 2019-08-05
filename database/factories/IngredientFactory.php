<?php

use Faker\Generator as Faker;
use Illuminate\Support\Facades\DB;

$factory->define(App\Models\Ingredient::class, function (Faker $faker) {
    return [
        'hash' => str_random(),
        'unit_id' => DB::table('units')->first()->id,
        'name' => $faker->domainWord,
        'price' => $faker->randomFloat(2, 100.00, 50000)
    ];
});
