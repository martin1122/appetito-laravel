<?php

namespace App\Models;

use App\Traits\Translatable;
use Illuminate\Database\Eloquent\Model;

class Notification extends Model
{
    use Translatable;

    const THUMBNAIL_WIDTH = 180;
    const THUMBNAIL_HEIGHT = 320;
    const FILES_DIR = 'notifications/%s';
    const IMAGE_DIR = 'notifications/%s/images/main';
    const IMAGE_THUMBNAIL_DIR = 'notifications/%s/images/thumbnails';

    /**
     * Model that contains translations
     *
     * @var string
     */
    protected $translationModel = NotificationTranslation::class;

    /**
     * Translatable attributes of a model
     *
     * @var array
     */
    protected $translatableFields = [ 'title', 'body' ];
}
