<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Services\Auth\Contracts\SocialProvidersService;
use App\Services\User\Contracts\UserService;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Laravel\Socialite\Facades\Socialite;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * @var UserService
     */
    private $userService;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = '/dashboard';

    /**
     * Create a new controller instance.
     *
     * @param UserService $userService
     */
    public function __construct(UserService $userService)
    {
        $this->userService = $userService;
        $this->middleware('guest')->except('logout');
    }

    /**
     * Redirect user to Google Auth Page
     *
     * @return mixed
     */
    public function redirectToGoogle()
    {
        return Socialite::driver('google')->redirect();
    }

    /**
     * Obtain the user information from GitHub.
     *
     * @param SocialProvidersService $socialProvidersService
     * @return \Illuminate\Http\Response
     */
    public function handleGoogleCallback(SocialProvidersService $socialProvidersService)
    {
        try {
            $userAccount = Socialite::with('google')->user();
            $user = $socialProvidersService->link('google', $userAccount);

            Auth::login($user);
        } catch (\Exception $e) {
            Log::info($e);
            return redirect('/login');
        }

        return redirect()->to('/home');
    }

    /**
     * Redirect user to Facebook Auth Page
     *
     * @return mixed
     */
    public function redirectToFacebook()
    {
        return Socialite::driver('facebook')->redirect();
    }

    protected function validateLogin(Request $request)
    {
        $this->validate(
            $request,
            [
                'login' => "required|string",
                'password' => 'required|string'
            ]
        );
    }

    /**
     * Get the needed authorization credentials from the request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    protected function credentials(Request $request)
    {
        $username = $this->userService->getUsername($request->get('login'));
        return ['username' => $username, 'password' => $request->get('password')];
    }
}
