<?php
/**
 * Created by PhpStorm.
 * User: dev001
 * Date: 12/14/18
 * Time: 5:18 PM
 */

namespace App\Repositories\Contracts;

interface IngredientRepositoryInterface extends CoolRepositoryInterface
{
    public function getWhereNameLike($name);
}
