<?php
/**
 * Created by PhpStorm.
 * User: dev001
 * Date: 12/10/18
 * Time: 12:32 PM
 */

namespace App\Repositories\Contracts;

use Prettus\Repository\Contracts\RepositoryCriteriaInterface;
use Prettus\Repository\Contracts\RepositoryInterface;

interface CoolRepositoryInterface extends RepositoryCriteriaInterface, RepositoryInterface
{
    /**
     * Retrieve count of the given attribute
     *
     * @param string $columns
     *
     * @return mixed
     */
    public function count($columns = '*');

    /**
     * Reset criteria, model, scope
     *
     * @return mixed
     */
    public function reset();

    /**
     * Active Users Query ( is_active = true )
     *
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function activeQuery();
}
