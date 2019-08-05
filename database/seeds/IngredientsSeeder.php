<?php

use App\Services\Ingredient\Contracts\IngredientService;
use Illuminate\Database\Seeder;

class IngredientsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(\App\Models\Ingredient::class, 50)->create();
    }
}
