<?php
/**
 * Created by PhpStorm.
 * User: dev001
 * Date: 2/20/19
 * Time: 5:08 PM
 */

namespace App\Http\Resources\Nation;

use Illuminate\Http\Resources\Json\JsonResource;

class NationResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'native_name' => $this->native_name
        ];
    }
}
