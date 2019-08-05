<?php

namespace App\Services\User;


use App\Models\Language;
use App\Repositories\Contracts\UserRepositoryInterface;
use App\Services\User\Contracts\UserService as UserServiceInterface;
use Illuminate\Support\Facades\Hash;
use Spatie\Permission\Models\Role;
use Vinkla\Hashids\HashidsManager;

class UserService implements UserServiceInterface
{
    /**
     * @var Role
     */
    private $role;

    /**
     * @var UserRepositoryInterface
     */
    private $user;

    /**
     * @var HashidsManager
     */
    private $hashManager;

    /**
     * UserService constructor.
     *
     * @param Role                    $role
     * @param UserRepositoryInterface $userRepository
     * @param HashidsManager          $hashManager
     */
    public function __construct(
        Role $role,
        UserRepositoryInterface $userRepository,
        HashidsManager $hashManager
    ) {
        $this->role = $role;
        $this->user = $userRepository;
        $this->hashManager = $hashManager;
    }

    /**
     * @param array $data
     *
     * @return mixed
     */
    public function store(array $data)
    {
        $name = array_get($data, 'name');
        $roles = array_get($data, 'roles', []);
        $roles = is_array($roles) ? $roles : [$roles];

        $user = $this->user->create([
            'name' => $name,
            'password' => array_has($data, 'password') ?
                Hash::make(array_get($data, 'password')) :
                null,
            'language_id' => Language::getIdByName(array_get($data, 'language')),
            'username' => $this->generateUsername($name),
            'is_active' => array_get($data, 'is_active'),
            'is_blocked' => array_get($data, 'is_blocked')
        ]);

        $user->hash = $this->hashManager->encode($user->id);
        $this->isEmail(array_get($data, 'login'))
            ? $user->email = array_get($data, 'login')
            : $user->phone = array_get($data, 'login');

        $user->save();

        foreach ($roles as $id){
            $role = $this->role->findOrFail($id);
            $user->assignRole($role);
        }

        $is_business = array_has($data, 'business_profile');;

        if($is_business){
            $profile = array_get($data, 'business_profile');

            if(array_has($profile, 'logo')){
                $logo = array_get($profile, 'logo');
            }else {
                $logo = asset('images/logo-placeholder.png');
            }

            $user->businessProfile()->create([
                'logo' => $logo,
                'address' => array_get($profile, 'address'),
                'web_site' => array_get($profile, 'web_site'),
                'contacts' => array_get($profile, 'contacts'),
                'info' => array_get($profile, 'info'),
                'country_id' => array_get($profile, 'country_id')
            ]);
        }

        $profile = array_get($data, 'user_profile');

        if(array_has($profile,'avatar')){
            $avatar = array_get($profile, 'avatar');
        }else {
            $avatar = asset('images/avatar-placeholder.png');
        }

        $user->userProfile()->create([
            'avatar' => $avatar,
            'gender' => array_get($profile, 'gender'),
            'birth_date' => array_get($profile, 'birth_date'),
            'location' => array_get($profile, 'location'),
            'info' => array_get($profile, 'info'),
            'country_id' => array_get($profile, 'country_id')
        ]);

        return $user;
    }

    /**
     * @param       $id
     * @param array $data
     *
     * @return mixed
     */
    public function update($id, array $data)
    {
        // TODO: Implement update() method.
    }

    /**
     * Check if is login email
     *
     * @param $login
     *
     * @return mixed
     */
    public function isEmail($login)
    {
        return filter_var($login, FILTER_VALIDATE_EMAIL);
    }

    /**
     * Check if login is username
     *
     * @param $login
     *
     * @return bool
     */
    public function isUsername($login){
        return substr($login, 0, 1) === "@";
    }

    /**
     * Generate username from name of a user
     *
     * @param $name
     *
     * @return mixed|string
     */
    public function generateUsername($name)
    {
        return "@"
            . str_replace(' ', '_', trim(strtolower($name)))
            . "_" . $this->hashManager->encode(time());
    }

    public function resetPassword(array $data)
    {
        $login = $data['login'];
        $newPassword = $data['new_password'];

        $user = $this->user->getByLogin($login);

        if ($user->code_confirmed)
        {
            $user->password = Hash::make($newPassword);
            $user->phone_verification = null;
            $user->code_confirmed = false;
            $user->save();

            return true;
        }

        return false;
    }

    /**
     * @param $login
     * @return mixed
     */
    public function getUsername($login)
    {
        if($this->isUsername($login)){
            return $login;
        }else if($this->isEmail($login)){
            $user = $this->user->findWhere(['email' => $login])->first();
            if($user){
                return $user->username;
            }
        }else {
            $user = $this->user->findWhere(['phone' => $login])->first();
            if($user){
                return $user->username;
            }
        }

        return $login;
    }

    /**
     * @param string $login
     * @param string $code
     *
     * @return bool|mixed
     */
    public function verifyUserCode(string $login, string $code)
    {
        $user = $this->user->getByLogin($login);

        if(!$user || $user->code_confirmed){
            return false;
        }

        if ($code === $user->phone_verification) {
            $user->phone_verification = null;
            $user->save();

            return true;
        }

        return false;
    }

    /**
     * @param string $login
     *
     * @return mixed|void
     */
    public function activateUser(string $login)
    {
        $user = $this->user->getByLogin($login);
        $user->is_active = true;
        $user->save();
    }

    /**
     * @param string $login
     *
     * @return mixed|void
     */
    public function setCodeConfirmed(string $login)
    {
        $user = $this->user->getByLogin($login);
        $user->code_confirmed = true;
        $user->save();
    }
}
