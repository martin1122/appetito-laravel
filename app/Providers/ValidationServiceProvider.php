<?php

namespace App\Providers;

use App\Models\User;
use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Validator;

class ValidationServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        $this->activeUserRule();
        $this->recaptchaV2();
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

    protected function activeUserRule()
    {
        Validator::extend('active_user', function ($attribute, $value) {
            return app(User::class)
                ->where($attribute, '=', $value)
                ->first()
                ->is_active;
        });
    }

    protected function recaptchaV2()
    {
        Validator::extend('recaptcha', 'App\\Validators\\ReCaptcha@validate');
    }
}
