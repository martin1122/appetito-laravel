<?php

namespace App\Models;

use App\Traits\Translatable;
use Illuminate\Database\Eloquent\Model;

class Collection extends Model
{
    use Translatable;

    const THUMBNAIL_WIDTH = 180;
    const THUMBNAIL_HEIGHT = 320;
    const FILES_DIR = 'collections/%s';
    const IMAGE_DIR = 'collections/%s/images/main';
    const IMAGE_THUMBNAIL_DIR = 'collections/%s/images/thumbnails';

    /**
     * Model that contains translations
     *
     * @var string
     */
    protected $translationModel = CollectionTranslation::class;

    protected $fillable = [
        'title',
        'image_id'
    ];

    protected $translatableFields = [
        'name',
        'description'
    ];

    public function image()
    {
        return $this->belongsTo(Image::class);
    }

    public function recipes()
    {
        return $this->belongsToMany(Recipe::class, 'recipe_collections');
    }
}
