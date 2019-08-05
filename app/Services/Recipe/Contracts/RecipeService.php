<?php
/**
 * Created by PhpStorm.
 * User: akbar
 * Date: 11/17/18
 * Time: 10:40 PM
 */

namespace App\Services\Recipe\Contracts;


use App\Models\User;

interface RecipeService
{
    /**
     * @param array $data
     * @param int   $userId
     *
     * @return mixed
     */
    public function storeRecipeApi(array $data, int $userId);

    /**
     * @param $id
     * @param array $data
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
