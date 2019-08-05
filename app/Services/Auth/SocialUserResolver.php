<?php

namespace App\Services\Auth;

use Adaojunior\Passport\SocialGrantException;
use Adaojunior\Passport\SocialUserResolverInterface;
use App\Models\User;
use Google_Client;
use Illuminate\Support\Facades\Log;
use Laravel\Socialite\Facades\Socialite;
use App\Services\Auth\Contracts\SocialProvidersService as SocialProviderServiceInterface;

class SocialUserResolver implements SocialUserResolverInterface
{
    private $socialServiceProviderService;

    public function __construct(SocialProviderServiceInterface $socialProvidersService)
    {
        $this->socialServiceProviderService = $socialProvidersService;
    }

    /**
     * Resolves user by given network and access token.
     *
     * @param string      $network
     * @param string      $accessToken
     * @param string|null $accessTokenSecret
     *
     * @return mixed
     */
    public function resolve($network, $accessToken, $accessTokenSecret = null)
    {
        switch ($network) {
            case 'google':
                return $this->authWithGoogle($accessToken);
                break;
            case 'facebook':
                return $this->authWithFacebook($accessToken);
                break;
            default:
                throw SocialGrantException::invalidNetwork();
                break;
        }
    }

    protected function authWithGoogle(string $idToken)
    {
        $client = new Google_Client(['client_id' => env('GOOGLE_CLIENT_ID')]);
        $payload = $client->verifyIdToken($idToken);
        $userPayload = [];
        if ($payload) {
            $userPayload = [
                'id' => $payload['sub'],
                'name' => $payload['name'],
                'email' => $payload['email'],
                'avatar' => $payload['picture']
            ];
        }

        $user = $this->socialServiceProviderService->link('google', $userPayload);

        return $user;
    }

    protected function authWithFacebook(string $accessToken)
    {
        $userFromToken = Socialite::driver('facebook')->userFromToken($accessToken);
        $userPayload = [
          'id' => $userFromToken->getId(),
          'name' => $userFromToken->getName(),
          'email' => $userFromToken->getEmail(),
          'avatar' => $userFromToken->getAvatar()
        ];
        $user = $this->socialServiceProviderService->link('facebook', $userPayload);

        return $user;
    }
}
