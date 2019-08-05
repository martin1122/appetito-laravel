<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes(['verify' => true]);

Route::group([
    'prefix' => 'login',
    'as'     => 'login.',
    'namespace' => 'Auth'
], function (){

    Route::group([
        'prefix' => 'google',
        'as'     => 'google.'
    ], function () {

        Route::get('/', [
            'as' => 'redirectGoogle',
            'uses' => 'LoginController@redirectToGoogle'
        ]);

        Route::get('/callback', [
            'as' => 'callbackGoogle',
            'uses' => 'LoginController@handleGoogleCallback'
        ]);
    });

    Route::group([
        'prefix' => 'facebook',
        'as'     => 'facebook.'
    ], function () {

        Route::get('/', [
            'as' => 'redirectFacebook',
            'uses' => 'LoginController@redirectToFacebook'
        ]);

        Route::get('/callback', [
            'as' => 'callbackFacebook',
            'uses' => 'LoginController@handleFacebookCallback'
        ]);
    });
});

Route::get('/home', 'HomeController@index')->name('home');

Route::group([
        'prefix' => 'dashboard',
        'as' => 'dashboard.',
        'middleware' => ['web', 'auth', 'role:administrator'],
        'namespace' => 'Dashboard'
    ], function () {
        //Dashboard
        Route::get('/', [
            'as' => 'index',
            'uses' => 'DashboardController@index'
        ]);

        Route::get('logs', [
            'as' => 'logs',
            'uses' => '\Rap2hpoutre\LaravelLogViewer\LogViewerController@index'
        ]);

        Route::group([
            'prefix' => 'recipes',
            'as' => 'recipes.'
        ], function () {

            Route::get('/', [
                'as' => 'index',
                'uses' => 'RecipeController@index'
            ]);

            Route::get('/create', [
                'as' => 'create',
                'uses' => 'RecipeController@create'
            ]);

            Route::post('/', [
                'as' => 'store',
                'uses' => 'RecipeController@store'
            ]);

            Route::get('/{id}', [
                'as' => 'edit',
                'uses' => 'RecipeController@edit'
            ]);

            Route::put('/{id}', [
                'as' => 'update',
                'uses' => 'RecipeController@update'
            ]);

            Route::delete('/{id}', [
                'as' => 'delete',
                'uses' => 'RecipeController@destroy'
            ]);
        });

        Route::group([
            'prefix' => '/collections',
            'as' => 'collections.'
        ], function () {

            Route::get('/', [
                'as' => 'index',
                'uses' => 'CollectionController@index'
            ]);

            Route::get('/create', [
                'as' => 'create',
                'uses' => 'CollectionController@create'
            ]);

            Route::post('/', [
                'as' => 'store',
                'uses' => 'CollectionController@store'
            ]);

            Route::get('/{id}', [
                'as' => 'edit',
                'uses' => 'CollectionController@edit'
            ]);

            Route::put('/{id}', [
                'as' => 'update',
                'uses' => 'CollectionController@update'
            ]);

            Route::delete('/{id}', [
                'as' => 'delete',
                'uses' => 'CollectionController@delete'
            ]);
        });

        Route::group([
            'prefix' => '/ingredients',
            'as' => 'ingredients.'
        ], function () {

            Route::get('/', [
                'as' => 'index',
                'uses' => 'IngredientController@index'
            ]);

            Route::get('/create', [
                'as' => 'create',
                'uses' => 'IngredientController@create'
            ]);

            Route::post('/', [
                'as' => 'store',
                'uses' => 'IngredientController@store'
            ]);

            Route::get('/{id}', [
                'as' => 'edit',
                'uses' => 'IngredientController@edit'
            ]);

            Route::put('/{id}', [
                'as' => 'update',
                'uses' => 'IngredientController@update'
            ]);

            Route::delete('/{id}', [
                'as' => 'delete',
                'uses' => 'IngredientController@delete'
            ]);
        });

        Route::group([
            'prefix' => '/nations',
            'as' => 'nations.'
        ], function () {

            Route::get('/', [
                'as' => 'index',
                'uses' => 'NationController@index'
            ]);

            Route::get('/create', [
                'as' => 'create',
                'uses' => 'NationController@create'
            ]);

            Route::post('/', [
                'as' => 'store',
                'uses' => 'NationController@store'
            ]);

            Route::get('/{id}', [
                'as' => 'edit',
                'uses' => 'NationController@edit'
            ]);

            Route::put('/{id}', [
                'as' => 'update',
                'uses' => 'NationController@update'
            ]);

            Route::delete('/{id}', [
                'as' => 'delete',
                'uses' => 'NationController@delete'
            ]);
        });

        Route::group([
            'prefix' => '/units',
            'as' => 'units.'
        ],function (){

            Route::get('/',[
                'as' => 'index',
                'uses' => 'UnitController@index'
            ]);

            Route::get('/create', [
                'as' => 'create',
                'uses' => 'UnitController@create'
            ]);

            Route::post('/', [
                'as' => 'store',
                'uses' => 'UnitController@store'
            ]);

            Route::get('/{id}', [
                'as' => 'edit',
                'uses' => 'UnitController@edit'
            ]);

            Route::put('/{id}', [
                'as' => 'update',
                'uses' => 'UnitController@update'
            ]);

            Route::delete('/{id}', [
                'as' => 'delete',
                'uses' => 'UnitController@delete'
            ]);
        });

        Route::group([
            'prefix' => 'notifications',
            'as'     => 'notifications.'
        ], function (){

            Route::get('/', [
                'as' => 'index',
                'uses' => 'NotificationController@index',
            ]);

            Route::post('/', [
                'as' => 'store',
                'uses' => 'NotificationController@store'
            ]);

            Route::get('/{id}', [
                'as' => 'show',
                'uses' => 'NotificationController@show'
            ]);
        });

        Route::group([
            'prefix' => '/pages',
            'as' => 'pages.',
        ], function () {

            Route::get('/404', [
                'as' => '404',
                'uses' => 'DashboardController@notFoundPage'
            ]);

            Route::get('/500', [
                'as' => '500',
                'uses' => 'DashboardController@serverErrorPage'
            ]);

            Route::get('/signin', [
                'as' => 'signin',
                'uses' => 'DashboardController@signInPage'
            ]);

            Route::get('/signup', [
                'as' => 'signup',
                'uses' => 'DashboardController@signUpPage'
            ]);
        });
});

Route::group([
    'prefix' => 'dashboard/moderator',
    'as'     => 'dashboard.moderator.',
    'middleware' => ['web', 'auth', 'role:administrator|moderator'],
    'namespace' => 'Dashboard\Moderator'
], function () {

    Route::get('/', [
        'as'     => 'index',
        'uses'   => 'DashboardController@index'
    ]);
});

Route::group([
    'prefix' => 'ajax',
    'as'     => 'ajax.',
    'namespace'=> 'Ajax'
], function () {

    Route::group([
        'prefix' => 'datatables',
        'as'     => 'datatables.',
        'namespace' => 'Datatable'
    ], function () {

        Route::get('/nations', [
            'as' => 'nations',
            'uses' => 'NationController@index'
        ]);

        Route::get('/ingredients', [
            'as' => 'ingredients',
            'uses' => 'IngredientController@index'
        ]);

        Route::get('/recipes', [
            'as' => 'recipes',
            'uses' => 'RecipeController@index'
        ]);

        Route::get('/collections', [
            'as' => 'collections',
            'uses' => 'CollectionController@index'
        ]);
    });
});
