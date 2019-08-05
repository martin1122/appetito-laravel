<?php
/**
 * Created by PhpStorm.
 * User: dev001
 * Date: 1/21/19
 * Time: 7:40 PM
 */

namespace App\Repositories;

use App\Models\Collection;
use App\Repositories\Contracts\CollectionRepositoryInterface;

class CollectionRepository extends CoolRepository implements CollectionRepositoryInterface
{

    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return Collection::class;
    }
}
