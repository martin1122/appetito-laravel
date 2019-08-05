<?php
/**
 * Created by PhpStorm.
 * User: dev001
 * Date: 12/18/18
 * Time: 8:41 PM
 */

namespace App\Services\Ingredient\Contracts;


interface IngredientService
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
