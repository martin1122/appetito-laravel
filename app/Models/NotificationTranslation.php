<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class NotificationTranslation extends Model
{
    public $timestamps = false;

    protected $fillable = ['title', 'body', 'lang_id'];

    public function notification()
    {
        return $this->belongsTo(Notification::class);
    }

    public function language(){
        return $this->belongsTo(Language::class, 'lang_id');
    }
}
