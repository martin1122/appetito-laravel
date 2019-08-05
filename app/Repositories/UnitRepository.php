<?php
/**
 * Created by PhpStorm.
 * User: dev001
 * Date: 3/6/19
 * Time: 4:41 PM
 */

namespace App\Repositories;

use App\Models\Unit;
use App\Repositories\Contracts\UnitRepositoryInterface;

class UnitRepository extends CoolRepository implements UnitRepositoryInterface
{

    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return Unit::class;
    }

    public function getByName($name)
    {
        return $this->model->where('name', $name);
    }
}
