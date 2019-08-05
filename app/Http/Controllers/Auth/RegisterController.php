<?php

namespace App\Http\Controllers\Auth;

use App\Models\Roles;
use App\Models\User;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Foundation\Auth\RegistersUsers;
use Spatie\Permission\Models\Role;
use Vinkla\Hashids\HashidsManager;

class RegisterController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation. By default this controller uses a trait to
    | provide this functionality without requiring any additional code.
    |
    */

    use RegistersUsers;

    /**
     * Where to redirect users after registration.
     *
     * @var string
     */
    protected $redirectTo = '/home';

    /**
     * Role object model
     *
     * @var Role
     */
    private $role;

    /**
     * Hashid manager for obfuscate ids
     *
     * @var
     */
    private $hashManager;

    /**
     * Create a new controller instance.
     *
     * @param Role           $role
     * @param HashidsManager $hashManager
     */
    public function __construct(
        Role $role,
        HashidsManager $hashManager
    ) {
        $this->role = $role;
        $this->middleware('guest');
        $this->hashManager = $hashManager;
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        return Validator::make($data, [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string', 'min:6', 'confirmed'],
            'g-recaptcha-response' => 'required|recaptcha'
        ]);
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array  $data
     * @return \App\Models\User
     */
    protected function create(array $data)
    {
        $user = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => Hash::make($data['password']),
        ]);

        $user->hash = $this->hashManager->encode($user->id);
        $user->save();
        $role = $this->role->findOrFail(Roles::ID_MEMBER);
        $user->assignRole($role);

        return $user;
    }
}
