<?php

namespace App\Providers;

use App\Repositories\CollectionRepository;
use App\Repositories\Contracts\CollectionRepositoryInterface;
use App\Repositories\Contracts\CountryRepositoryInterface;
use App\Repositories\Contracts\DirectionRepositoryInterface;
use App\Repositories\Contracts\ImageRepositoryInterface;
use App\Repositories\Contracts\IngredientRepositoryInterface;
use App\Repositories\Contracts\UserRepositoryInterface;
use App\Repositories\Contracts\RecipeRepositoryInterface;
use App\Repositories\Contracts\UnitRepositoryInterface;
use App\Repositories\CountryRepository;
use App\Repositories\DirectionRepository;
use App\Repositories\ImageRepository;
use App\Repositories\IngredientRepository;
use App\Repositories\RecipeRepository;
use App\Repositories\UnitRepository;
use App\Repositories\UserRepository;
use Illuminate\Support\ServiceProvider;

class RepositoryServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }

    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(UserRepositoryInterface::class, UserRepository::class);
        $this->app->bind(CountryRepositoryInterface::class, CountryRepository::class);
        $this->app->bind(IngredientRepositoryInterface::class, IngredientRepository::class);
        $this->app->bind(RecipeRepositoryInterface::class, RecipeRepository::class);
        $this->app->bind(DirectionRepositoryInterface::class, DirectionRepository::class);
        $this->app->bind(CollectionRepositoryInterface::class, CollectionRepository::class);
        $this->app->bind(UnitRepositoryInterface::class, UnitRepository::class);
        $this->app->bind(ImageRepositoryInterface::class, ImageRepository::class);
    }
}
