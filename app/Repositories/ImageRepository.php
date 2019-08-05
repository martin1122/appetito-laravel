<?php

namespace App\Repositories;

use App\Models\Image;
use App\Repositories\Contracts\ImageRepositoryInterface;

class ImageRepository extends CoolRepository implements ImageRepositoryInterface
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return Image::class;
    }
}