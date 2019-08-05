<?php

namespace App\Models;

use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Spatie\Permission\Traits\HasRoles;
use Laravel\Passport\HasApiTokens;

/**
 * @property bool is_active
 */
class User extends Authenticatable implements MustVerifyEmail
{
    use Notifiable, HasRoles, HasApiTokens;

    protected $guard_name = 'web';
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'email',
        'phone',
        'username',
        'password',
        'is_active',
        'is_blocked',
        'language_id'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    public function userProfile(){
        return $this->hasOne(UserProfile::class);
    }

    public function businessProfile(){
        return $this->hasOne(BusinessProfile::class);
    }

    public function recipes(){
        $this->hasMany(Recipe::class);
    }

    public function username(){
        return 'username';
    }

    public function socialAccounts(){
        return $this->hasMany(SocialAccount::class);
    }

    public function findForPassport($username)
    {
        return $this->where('username', $username)->first();
    }
}
