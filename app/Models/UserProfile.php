<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UserProfile extends Model
{
    const MALE = 1;
    const FEMALE = 2;

    protected $fillable = [
        'avatar',
        'gender',
        'birth_date',
        'location',
        'info'
    ];

    public function user(){
        $this->belongsTo(User::class);
    }

    public function country(){
        return $this->belongsTo(Country::class);
    }
}
