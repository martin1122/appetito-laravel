<?php

namespace App\Models;

use App\Traits\Translatable;
use Illuminate\Database\Eloquent\Model;

class Nation extends Model
{
    use Translatable;

    protected $fillable = ['native_name'];

    /**
     * Model that contains translations
     *
     * @var string
     */
    protected $translationModel = NationTranslation::class;

    public function recipes()
    {
        return $this->hasMany(Recipe::class);
    }

    public function country()
    {
        return $this->belongsTo(Country::class);
    }
}
