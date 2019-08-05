<?php
/**
 * Created by PhpStorm.
 * User: dev001
 * Date: 2/21/19
 * Time: 12:49 PM
 */

namespace App\Http\Resources\Direction;

use Illuminate\Http\Resources\Json\ResourceCollection;

class DirectionCollection extends ResourceCollection
{
    public $collects = DirectionResource::class;

    public function toArray($request)
    {
        return $this->collection;
    }
}
