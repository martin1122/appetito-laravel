<?php

namespace App\Http\Resources\Image;

use Illuminate\Http\Resources\Json\ResourceCollection;

class ImageCollection extends ResourceCollection
{
    public $collects = ImageResource::class;

    public function toArray($request)
    {
        return $this->collection;
    }
}