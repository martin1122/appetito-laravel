<?php
/**
 * Created by PhpStorm.
 * User: dev001
 * Date: 1/11/19
 * Time: 7:50 PM
 */

namespace App\Repositories;


use App\Models\Direction;
use App\Repositories\Contracts\DirectionRepositoryInterface;

class DirectionRepository extends CoolRepository implements DirectionRepositoryInterface
{

    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return Direction::class;
    }
}
