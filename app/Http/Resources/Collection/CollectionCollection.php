<?php
/**
 * Created by PhpStorm.
 * User: dev001
 * Date: 2/21/19
 * Time: 1:17 PM
 */

namespace App\Http\Resources\Collection;

use Illuminate\Http\Resources\Json\JsonResource;

class CollectionCollection extends JsonResource
{

    public $collects = CollectionResource::class;

    public function toArray($request)
    {
        return $this->collection;
    }
}
