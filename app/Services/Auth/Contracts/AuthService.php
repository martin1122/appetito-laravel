<?php
/**
 * Created by PhpStorm.
 * User: akbar
 * Date: 11/24/18
 * Time: 11:40 AM
 */

namespace App\Services\Auth\Contracts;


interface AuthService
{
    /**
     * @param array $data
     * @return mixed
     */
    public function loginUser(array $data);

    /**
     * @param array $data
     * @return mixed
     */
    public function registerUser(array $data);

    /**
     * @param array $data
     * @return mixed
     */
    public function loginGoogleUser(array $data);

    /**
     * @param array $data
     * @return mixed
     */
    public function loginFacebookUser(array $data);
}
