<?php
/**
 * Created by PhpStorm.
 * User: dev001
 * Date: 2/20/19
 * Time: 8:06 PM
 */

namespace App\Http\Resources\Direction;

use App\Http\Resources\Traits\ResponseWithPayload;
use Illuminate\Http\Resources\Json\JsonResource;

class DirectionResource extends JsonResource
{
    use ResponseWithPayload;

    public function getPayload()
    {
        return [
            'id' => $this->id,
            'order' => $this->order,
            'body' => $this->body
        ];
    }
}
