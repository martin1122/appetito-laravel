<?php
/**
 * Created by PhpStorm.
 * User: dev001
 * Date: 2/19/19
 * Time: 7:31 PM
 */

namespace App\Http\Resources\Unit;

use Illuminate\Http\Resources\Json\JsonResource;

class UnitResource extends JsonResource
{

    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->name
        ];
    }
}
