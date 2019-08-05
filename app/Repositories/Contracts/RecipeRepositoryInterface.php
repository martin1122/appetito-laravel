<?php
/**
 * Created by PhpStorm.
 * User: akbar
 * Date: 11/17/18
 * Time: 10:18 PM
 */

namespace App\Repositories\Contracts;

interface RecipeRepositoryInterface extends CoolRepositoryInterface
{
    public function getWhereNameLike(string $name);

    public function filterActiveRecipes();

    public function filterConfirmedRecipes();

    public function filterByDetails();
}
