<?php
/**
 * Created by PhpStorm.
 * User: dev001
 * Date: 12/10/18
 * Time: 12:31 PM
 */

namespace App\Repositories;


use App\Models\Recipe;
use App\Models\User;
use App\Repositories\Contracts\CoolRepositoryInterface;
use App\Repositories\Criteria\ActiveEntityCriteria;
use Prettus\Repository\Eloquent\BaseRepository;

abstract class CoolRepository extends BaseRepository implements CoolRepositoryInterface
{
    /**
     * Retrieve count of the given attribute
     *
     * @param string $columns
     *
     * @return mixed
     */
    public function count($columns = '*'){
        $this->applyCriteria();
        $this->applyScope();

        return $this->model->count($columns);
    }

    /**
     * Reset criteria, model, scope
     *
     * @return mixed
     */
    public function reset()
    {
        $this->resetCriteria();
        $this->resetModel();
        $this->resetScope();

        return $this;
    }

    public function applyCriteria()
    {
        parent::applyCriteria();

        return $this;
    }

    /**
     * All active Users
     *
     * @return UserRepository|\Illuminate\Database\Eloquent\Builder
     */
    public function activeQuery()
    {
        if($this->model instanceof User or $this->model instanceof Recipe){
            return $this->pushCriteria(ActiveEntityCriteria::class);
        }else{
            return $this;
        }
    }
}
