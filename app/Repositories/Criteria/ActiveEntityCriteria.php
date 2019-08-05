<?php
/**
 * Created by PhpStorm.
 * User: akbar
 * Date: 12/1/18
 * Time: 10:11 PM
 */

namespace App\Repositories\Criteria;

use Prettus\Repository\Contracts\RepositoryInterface;
use Prettus\Repository\Contracts\CriteriaInterface;

class ActiveEntityCriteria implements CriteriaInterface
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
        return $model->where('is_active', 1);
    }
}
