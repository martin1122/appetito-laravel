<?php
/**
 * Created by PhpStorm.
 * User: akbar
 * Date: 12/24/18
 * Time: 12:36 PM
 */

namespace App\Services\Auth\Contracts;


interface SocialProvidersService
{
    /**
     * @param string $provider
     * @param $userAccount
     * @return mixed
     */
    public function link(string $provider, $userAccount);
}