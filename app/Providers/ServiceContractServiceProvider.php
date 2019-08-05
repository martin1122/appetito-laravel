<?php

namespace App\Providers;

use App\Services\Auth\SocialProvidersService;
use App\Services\Collection\CollectionService;
use App\Services\Country\CountryService;
use App\Services\Direction\DirectionService;
use App\Services\Ingredient\IngredientService;
use App\Services\Media\ImageService;
use App\Services\Nation\NationService;
use App\Services\Notification\NotificationService;
use App\Services\Notification\SMSService;
use App\Services\Recipe\RecipeService;
use App\Services\Unit\UnitService;
use App\Services\User\UserService;
use Illuminate\Support\ServiceProvider;
use App\Services\User\Contracts\UserService as UserServiceInterface;
use App\Services\Country\Contracts\CountryService as CountryServiceInterface;
use App\Services\Auth\AuthService;
use App\Services\Auth\Contracts\AuthService as AuthServiceInterface;
use App\Services\Nation\Contracts\NationService as NationServiceInterface;
use App\Services\Unit\Contracts\UnitService as UnitServiceInterface;
use App\Services\Ingredient\Contracts\IngredientService as IngredientServiceInterface;
use App\Services\Auth\Contracts\SocialProvidersService as SocialProvidersServiceInterface;
use App\Services\Recipe\Contracts\RecipeService as RecipeServiceInterface;
use App\Services\Collection\Contracts\CollectionService as CollectionServiceInterface;
use App\Services\Media\Contracts\ImageService as ImageServiceInterface;
use App\Services\Direction\Contracts\DirectionService as DirectionServiceInterface;
use App\Services\Notification\Contracts\NotificationService as NotificationServiceInterface;
use App\Services\Notification\Contracts\SMSService as MessageService;

class ServiceContractServiceProvider extends ServiceProvider
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
        $this->app->bind(UserServiceInterface::class, UserService::class);
        $this->app->bind(CountryServiceInterface::class, CountryService::class);
        $this->app->bind(AuthServiceInterface::class, AuthService::class);
        $this->app->bind(NationServiceInterface::class, NationService::class);
        $this->app->bind(UnitServiceInterface::class, UnitService::class);
        $this->app->bind(IngredientServiceInterface::class, IngredientService::class);
        $this->app->bind(SocialProvidersServiceInterface::class, SocialProvidersService::class);
        $this->app->bind(RecipeServiceInterface::class, RecipeService::class);
        $this->app->bind(CollectionServiceInterface::class, CollectionService::class);
        $this->app->bind(ImageServiceInterface::class, ImageService::class);
        $this->app->bind(DirectionServiceInterface::class, DirectionService::class);
        $this->app->bind(NotificationServiceInterface::class, NotificationService::class);
        $this->app->bind(MessageService::class, SMSService::class);
    }
}
