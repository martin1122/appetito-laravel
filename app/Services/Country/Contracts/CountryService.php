<?php
/**
 * Created by PhpStorm.
 * User: dev001
 * Date: 11/30/18
 * Time: 1:48 PM
 */

namespace App\Services\Country\Contracts;


interface CountryService
{
    /**
     * @param array $data
     *
     * @return mixed
     */
    public function storeAll(array $data);
}
