<?php
/**
 * Created by PhpStorm.
 * User: dev001
 * Date: 1/2/19
 * Time: 7:54 PM
 */

namespace App\Services\Collection\Contracts;


interface CollectionService
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
