<?php
/**
 * Created by PhpStorm.
 * User: dev001
 * Date: 2/21/19
 * Time: 2:51 PM
 */

namespace App\Repositories\Criteria\Recipe;


use Prettus\Repository\Contracts\CriteriaInterface;
use Prettus\Repository\Contracts\RepositoryInterface;

class ConfirmedRecipeCriteria implements CriteriaInterface
{

    /**
     * Apply criteria in query repository
     *
     * @param                     $model
     * @param RepositoryInterface $repository
     *
     * @return mixed
     */
    public function apply($model, RepositoryInterface $repository)
    {
        return $model->where('is_confirmed', 1);
    }
}
