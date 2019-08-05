<?php
/**
 * Created by PhpStorm.
 * User: dev001
 * Date: 3/6/19
 * Time: 4:40 PM
 */

namespace App\Repositories\Contracts;


interface UnitRepositoryInterface extends CoolRepositoryInterface
{

    public function getByName($name);
}
