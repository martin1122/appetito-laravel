<?php

namespace App\Services\Auth;

use App\Models\Roles;
use App\Models\SocialAccount;
use App\Services\Auth\Contracts\SocialProvidersService as SocialProviderServiceInterface;
use App\Services\User\Contracts\UserService;

class SocialProvidersService implements SocialProviderServiceInterface
{

    /**
     * @var UserService
     */
    private $userService;

    /**
     * SocialProvidersService constructor.
     * @param UserService $userService
     */
    public function __construct(UserService $userService)
    {
        $this->userService = $userService;
    }

    /**
     * @param string $provider
     * @param $userAccount
     * @return mixed
     */
    public function link(string $provider, $userAccount)
    {
        $account = SocialAccount::where('provider_id', $userAccount['id'])->first();
        if($account){
            return $account->user;
        }else{
            $data = [
                'name'      => $userAccount['name'],
                'login'     => $userAccount['email'],
                'is_active' => true,
                'is_blocked'=> false,
                'roles'     => [Roles::ID_MEMBER],
                'user_profile' => [
                    'avatar' => $userAccount['avatar']
                ]
            ];

            $user = $this->userService->store($data);
            $user->socialAccounts()->create([
                'provider_name' => $provider,
                'provider_id' => $userAccount['id']
            ]);

            return $user;
        }
    }
}
