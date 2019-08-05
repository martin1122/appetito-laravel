<?php
/**
 * Created by PhpStorm.
 * User: dev001
 * Date: 1/11/19
 * Time: 7:15 PM
 */

namespace App\Services\Direction\Contracts;


interface DirectionService
{

    /**
     * @param array $data
     *
     * @return mixed
     */
    public function store(array $data);

    /**
     * @param       $id
     * @param array $data
     *
     * @return mixed
     */
    public function update($id, array $data);

    /**
     * @param $id
     *
     * @return mixed
     */
    public function delete($id);
}
