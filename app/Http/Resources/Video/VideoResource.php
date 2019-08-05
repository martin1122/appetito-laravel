<?php
/**
 * Created by PhpStorm.
 * User: dev001
 * Date: 2/20/19
 * Time: 5:18 PM
 */

namespace App\Http\Resources\Video;


use App\Http\Resources\TranslatableResource;

class VideoResource extends TranslatableResource
{
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'slug' => $this->slug,
            'url' => url("storage/$this->url"),
            'media_type' => $this->media_type,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at
        ];
    }
}
