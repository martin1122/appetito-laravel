<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CollectionTranslation extends Model
{
    public $timestamps = false;

    protected $fillable = [
        'name',
        'description',
        'lang_id'
    ];

    public function collection(){
        return $this->belongsTo(Collection::class);
    }

    public function language(){
        return $this->belongsTo(Language::class, 'lang_id');
    }
}
