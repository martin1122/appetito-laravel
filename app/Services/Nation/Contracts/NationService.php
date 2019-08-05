<?php
/**
 * Created by PhpStorm.
 * User: dev001
 * Date: 12/12/18
 * Time: 5:39 PM
 */

namespace App\Services\Nation\Contracts;


interface NationService
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
}
