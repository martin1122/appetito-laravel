<?php

namespace App\Providers;

use App\Models\Ingredient;
use App\Observers\IngredientObserver;
use Illuminate\Support\ServiceProvider;

class ModelObsererProvider extends ServiceProvider
{
    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        Ingredient::observe(IngredientObserver::class);
    }

    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        //
    }
}
