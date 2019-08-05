<?php

use App\Models\Direction;
use App\Models\Image;
use App\Models\Ingredient;
use App\Models\Language;
use App\Models\Recipe;
use App\Models\RecipeDetail;
use Faker\Generator as Faker;
use Illuminate\Support\Facades\DB;

$factory->define(Recipe::class, function (Faker $faker) {
    return [
        'hash' => str_random(),
        'is_confirmed' => true,
        'is_active' => true,
        'is_pinned' => false,
        'owner_id' => 1,
        'image_id' => factory(Image::class)->create()->id,
        'difficulty_id' => rand(1, 4),
        'nation_id' => DB::table('nations')->first()->id,
        'video_id' => null
    ];
});

$factory->afterCreating(Recipe::class, function ($recipe, $faker) {
    $recipe->detail()->save(factory(RecipeDetail::class)->create([
        'recipe_id' => $recipe->id
    ]));
    $recipe->translations()->create([
        'name' => $faker->realText(20, 1),
        'description' => $faker->realText(200, 2),
        'lang_id' => Language::ID_UZBEK
    ]);
    $recipe->translations()->create([
        'name' => $faker->realText(20, 1),
        'description' => $faker->realText(200, 2),
        'lang_id' => Language::ID_ENGLISH
    ]);
    $recipe->translations()->create([
        'name' => $faker->realText(20, 1),
        'description' => $faker->realText(200, 2),
        'lang_id' => Language::ID_RUSSIAN
    ]);

    $ingredientsCount = rand(1, 15);
    $ingredients = factory(Ingredient::class, $ingredientsCount)->create();

    foreach ($ingredients as $ingredient){
        $recipe->ingredients()->attach($ingredient->id);
    }
    $directionsCount = rand(3, 10);
    factory(Direction::class, $directionsCount)->create([
        'recipe_id' => $recipe->id
    ]);
});
