<?php
/**
 * Created by PhpStorm.
 * User: User
 * Date: 12/16/2018
 * Time: 16:38
 */

namespace App\Services\Unit\Contracts;


interface UnitService
{
    /**
     * @param array $data
     * @return mixed
     */
    public function store(array $data);

    /**
     * @param $id
     * @param array $data
     * @return mixed
     */
    public function update($id, array $data);

}