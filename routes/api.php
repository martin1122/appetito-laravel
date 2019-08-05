<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group([
    'prefix' => 'v1',
    'as'     => 'api.',
    'namespace' => 'API',
    'middleware' => 'localize'
], function() {

    Route::group([
        'prefix' => 'login',
        'as'     => 'login.',
        'namespace' => 'Auth'
    ], function() {

        Route::post('/', [
            'as' => 'plain',
            'uses' => 'LoginController@login'
        ]);

        Route::post('/google', [
            'as' => 'google',
            'uses' => 'LoginController@loginGoogle'
        ]);

        Route::post('/facebook', [
            'as' => 'facebook',
            'uses' => 'LoginController@loginFacebook'
        ]);
    });

    Route::group([
        'prefix' => 'password',
        'as'     => 'password.',
        'namespace' => 'Auth'
    ], function () {

        Route::post('/forgot', [
            'as' => 'forgot',
            'uses' => 'ForgotPasswordController@forgot'
        ]);

        Route::post('/confirm', [
            'as' => 'confirm',
            'uses' => 'ConfirmPasswordController@password'
        ]);

        Route::post('/reset', [
            'as' => 'reset',
            'uses' => 'ForgotPasswordController@reset'
        ]);
    });

    Route::post('/login',[
        'as' => 'login',
        'uses' => 'Auth\LoginController@login'
    ]);

    Route::post('/register', [
        'as' => 'register',
        'uses' => 'Auth\RegisterController@register'
    ]);

    Route::post('/register/confirm', [
        'as' => 'register.confirm',
        'uses' => 'Auth\ConfirmPasswordController@register'
    ]);

    Route::group([
        'prefix' => '/media',
        'as' => 'media.',
        'namespace' => 'Media'
    ], function () {

        Route::group([
            'prefix' => '/images',
            'as' => 'images.'
        ], function () {

            Route::post('/', [
                'as' => 'store',
                'uses' => 'ImageController@store'
            ]);

            Route::delete('/{id}', [
                'as' => 'delete',
                'uses' => 'ImageController@delete'
            ]);
        });
    });

    Route::group([
        'prefix' => '/nations',
        'as'     => 'nations.',
    ], function() {

        Route::get('/', [
            'as' => 'index',
            'uses' => 'NationController@index'
        ]);
    });

    Route::group([
        'prefix' => '/ingredients',
        'as'     => 'ingredients.'
    ], function () {

        Route::get('/', [
            'as' => 'index',
            'uses' => 'IngredientController@index'
        ]);

        Route::get('/{id}', [
            'as' => 'show',
            'uses' => 'IngredientController@show'
        ]);
    });

    Route::group([
        'prefix' => '/units',
        'as'     => 'units.'
    ], function () {

        Route::get('/', [
            'as' => 'index',
            'uses' => 'UnitController@index'
        ]);

        Route::get('/{id}', [
            'as' => 'show',
            'uses' => 'UnitController@show'
        ]);
    });

    Route::group([
        'prefix' => '/recipes',
        'as'     => 'recipes.'
    ], function () {

        Route::get('/', [
            'as' => 'index',
            'uses' => 'RecipeController@index'
        ]);

        Route::get('/{id}', [
            'as' => 'show',
            'uses' => 'RecipeController@show'
        ]);

        Route::post('/', [
            'as' => 'store',
            'uses' => 'RecipeController@store'
        ]);
    });
});

Route::group([
    'prefix' => 'dashboard',
    'as'     => 'dashboard.',
    'namespace' => 'Ajax\Dashboard'
], function () {

    Route::get('/collections/{id}/recipes', [
        'as' => 'collections.recipes',
        'uses' => 'CollectionController@listRecipesInCollection'
    ]);

    Route::get('/recipes', [
        'as' => 'recipes',
        'uses' => 'CollectionController@findRecipe'
    ]);

    Route::post('/collections/add', [
        'as' => 'collection.add',
        'uses' => 'CollectionController@addRecipeToCollection'
    ]);

    Route::post('/collections/remove', [
        'as' => 'collection.remove',
        'uses' => 'CollectionController@removeRecipeToCollection'
    ]);
});
