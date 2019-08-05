<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class NationTranslation extends Model
{
    public $timestamps = false;

    protected $fillable = ['name', 'lang_id'];

    public function nation(){
        return $this->belongsTo(Nation::class);
    }

    public function language(){
        return $this->belongsTo(Language::class, 'lang_id');
    }
}
