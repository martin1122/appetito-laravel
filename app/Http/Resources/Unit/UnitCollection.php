<?php
/**
 * Created by PhpStorm.
 * User: dev001
 * Date: 3/6/19
 * Time: 4:50 PM
 */

namespace App\Http\Resources\Unit;

use App\Http\Resources\TranslatableCollection;

class UnitCollection extends TranslatableCollection
{

    public $collects = UnitResource::class;

    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     *
     * @return \Illuminate\Support\Collection
     */
    public function toArray($request)
    {
        return $this->collection;
    }
}
