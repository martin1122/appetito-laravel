<?php

namespace App\Providers;

use Adaojunior\Passport\SocialUserResolverInterface;
use App\Services\Auth\SocialUserResolver;
use Illuminate\Http\Resources\Json\Resource;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->singleton(SocialUserResolverInterface::class, SocialUserResolver::class);
        Resource::withoutWrapping();
    }
}
