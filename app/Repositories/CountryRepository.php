<?php
/**
 * Created by PhpStorm.
 * User: dev001
 * Date: 11/30/18
 * Time: 1:52 PM
 */

namespace App\Repositories;


use App\Models\Country;
use App\Repositories\Contracts\CountryRepositoryInterface;

class CountryRepository extends CoolRepository implements CountryRepositoryInterface
{

    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return Country::class;
    }
}
