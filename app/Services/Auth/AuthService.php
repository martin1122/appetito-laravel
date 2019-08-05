<?php

namespace App\Services\Auth;

use App\Models\Roles;
use App\Services\User\Contracts\UserService;
use Exception;
use GuzzleHttp\Client;
use App\Services\Auth\Contracts\AuthService as AuthServiceInterface;
use Illuminate\Support\Facades\Log;
class AuthService implements AuthServiceInterface
{
    /**
     * @var UserService
     */
    private $userService;

    /**
     * AuthService constructor.
     * @param UserService $userService
     */
    public function __construct(UserService $userService)
    {
        $this->userService = $userService;
    }

    /**
     * @param array $data
     * @return mixed
     */
    public function loginUser(array $data)
    {
        $login = array_get($data, 'login');
        $password = array_get($data, 'password');
        $clientId = array_get($data, 'client_id');
        $clientSecret = array_get($data, 'client_secret');

        $username = $this->userService->getUsername($login);

        return $this->generateAccessToken($clientId, $clientSecret, $username, $password);
    }

    /**
     * @param array $data
     * @return \Illuminate\Http\JsonResponse|mixed
     */
    public function loginGoogleUser(array $data)
    {
        $accessToken = array_get($data, 'access_token');
        $clientId = array_get($data, 'client_id');
        $clientSecret = array_get($data, 'client_secret');

        return $this->generateAccessTokenSocial(
            $clientId,
            $clientSecret,
            $accessToken,
            'google'
        );
    }

    /**
     * @param array $data
     * @return \Illuminate\Http\JsonResponse|mixed
     */
    public function loginFacebookUser(array $data)
    {
        $accessToken = array_get($data, 'access_token');
        $clientId = array_get($data, 'client_id');
        $clientSecret = array_get($data, 'client_secret');

        return $this->generateAccessTokenSocial(
            $clientId,
            $clientSecret,
            $accessToken,
            'facebook'
        );
    }

    /**
     * @param array $data
     * @return mixed
     */
    public function registerUser(array $data)
    {
        return $this->userService->store(array_merge($data, [
            'is_active' => false,
            'is_blocked'=> false,
            'roles'     => [Roles::ID_MEMBER]
        ]));
    }

    /**
     * @param $clientId
     * @param $clientSecret
     * @param $username
     * @param $password
     * @return mixed
     */
    private function generateAccessToken(
        $clientId,
        $clientSecret,
        $username,
        $password
    ) {
        $http = new Client;

        try {
            $response = $http->post(sprintf('%s/oauth/token', env('APP_URL')), [
                'form_params' => [
                    'grant_type' => 'password',
                    'client_id' => $clientId,
                    'client_secret' => $clientSecret,
                    'username' => $username,
                    'password' => $password,
                    'scope' => '',
                ],
            ]);

            return json_decode((string) $response->getBody(), true);
        } catch (Exception $exception) {
            Log::error($exception);
            return false;
        }
    }

    /**
     * @param $clientId
     * @param $clientSecret
     * @param $socialAccessToken
     * @param $provider
     * @return mixed
     */
    private function generateAccessTokenSocial(
        $clientId,
        $clientSecret,
        $socialAccessToken,
        $provider
    ) {
        $http = new Client;

        try {
            $response = $http->post(sprintf('%s/oauth/token', env('APP_URL')), [
                'form_params' => [
                    'grant_type' => 'social',
                    'client_id' => $clientId,
                    'client_secret' => $clientSecret,
                    'access_token' => $socialAccessToken,
                    'network' => $provider,
                ],
            ]);

            return json_decode((string) $response->getBody(), true);
        } catch (Exception $exception) {
            Log::error($exception);
            return false;
        }
    }
}
