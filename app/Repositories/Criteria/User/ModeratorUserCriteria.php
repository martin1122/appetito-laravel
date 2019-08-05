<?php
/**
 * Created by PhpStorm.
 * User: dev001
 * Date: 12/7/18
 * Time: 8:00 PM
 */

namespace App\Repositories\Criteria\User;


use App\Models\Roles;
use Prettus\Repository\Contracts\CriteriaInterface;
use Prettus\Repository\Contracts\RepositoryInterface;

class ModeratorUserCriteria implements CriteriaInterface
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
        return $model->select('users.*')
            ->join('model_has_roles', 'users.id', '=', 'model_has_roles.model_id')
            ->whereIn('model_has_roles.role_id', [Roles::ID_MODERATOR]);
    }
}
