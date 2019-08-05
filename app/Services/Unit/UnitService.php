<?php
/**
 * Created by PhpStorm.
 * User: User
 * Date: 12/16/2018
 * Time: 16:36
 */
namespace App\Services\Unit;

use App\Models\Language;
use App\Models\Unit;
use App\Services\Unit\Contracts\UnitService as UnitServiceInterface;

class UnitService implements UnitServiceInterface
{


    /**
     * @param array $data
     * @return mixed
     */
    public function store(array $data)
    {
        return Unit::create(
            ['name' => array_get($data, 'name')]
        );
    }

    /**
     * @param $id
     * @param array $data
     * @return mixed
     */
    public function update($id, array $data)
    {

    }
}
