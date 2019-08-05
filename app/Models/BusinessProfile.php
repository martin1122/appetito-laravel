<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BusinessProfile extends Model
{
    protected $fillable = ['logo', 'address', 'web_site', 'contacts', 'info'];

    public function user(){
        $this->belongsTo(User::class);
    }

    public function country(){
        return $this->belongsTo(Country::class);
    }
}
