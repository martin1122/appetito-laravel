<?php

use App\Models\User;
use Faker\Generator as Faker;

$factory->define(App\Models\UserProfile::class, function (Faker $faker) {
    return [
        'avatar' => 'http://appetito.lc/images/avatar-placeholder.png',
        'gender' => rand(1,2),
        'birth_date' => $faker->date(),
        'country_id' => rand(1, 200),
        'user_id' => factory(User::class)->create()->id
    ];
});
