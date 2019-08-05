<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Language extends Model
{
    const ID_DEFAULT = 1;

    const ID_UZBEK = 1;
    const ID_ENGLISH = 2;
    const ID_RUSSIAN = 3;

    const DEFAULT = 'uz';

    const UZBEK = 'uz';
    const RUSSIAN = 'ru';
    const ENGLISH = 'en';

    public static function getIdByName($locale)
    {
        if($locale == 'uz') {
            return self::ID_UZBEK;
        }else if ($locale == 'ru') {
            return self::ID_RUSSIAN;
        }else if ($locale == 'en') {
            return self::ID_ENGLISH;
        }else {
            return null;
        }
    }
}
