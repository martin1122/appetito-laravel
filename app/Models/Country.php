<?php

namespace App\Models;

use App\Models\User;
use App\Models\UserProfile;
use Illuminate\Database\Eloquent\Model;

class Country extends Model
{
    protected $fillable = [
        'name', 'native_name', 'alpha_code2'
    ];

    public function users(){
        return $this->hasManyThrough(User::class, UserProfile::class);
    }

    public function usersByBusinesses(){
        return $this->hasManyThrough(User::class, BusinessProfile::class);
    }

    public function nations(){
        return $this->hasMany(Nation::class);
    }
}
