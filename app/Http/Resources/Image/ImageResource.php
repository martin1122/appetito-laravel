<?php

namespace App\Http\Resources\Image;

use App\Http\Resources\Traits\ResponseWithPayload;
use Illuminate\Http\Resources\Json\JsonResource;

class ImageResource extends JsonResource
{
    use ResponseWithPayload;

    public function getPayload()
    {
        return [
            'id' => $this->id,
            'original' => url("storage/$this->original"),
            'tiny' => url("storage/$this->tiny"),
            'medium' => url("storage/$this->medium"),
            'webp' => url("storage/$this->webp"),
            'expire' => $this->expire,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at
        ];
    }
}
