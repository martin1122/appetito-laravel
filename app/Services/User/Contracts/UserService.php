<?php
/**
 * Created by PhpStorm.
 * User: dev001
 * Date: 11/12/18
 * Time: 5:57 PM
 */

namespace App\Services\User\Contracts;


use App\Models\User;

interface UserService
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
     * Check if string is email
     * @param $login
     * @return mixed
     */
    public function isEmail($login);

    /**
     * Generate unique user name
     *
     * @param $name
     * @return mixed
     */
    public function generateUsername($name);

    /**
     * @param $login
     * @return mixed
     */
    public function getUsername($login);

    /**
     * @param string $login
     * @param string $code
     * @return mixed
     */
    public function verifyUserCode(string $login, string $code);

    /**
     * @param string $login
     * @return mixed
     */
    public function activateUser(string $login);

    /**
     * @param string $login
     * @return mixed
     */
    public function setCodeConfirmed(string $login);

    /**
     * @param array $data
     * @return bool
     */
    public function resetPassword(array $data);
}
