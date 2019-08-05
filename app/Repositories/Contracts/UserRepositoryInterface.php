<?php
/**
 * Created by PhpStorm.
 * User: dev001
 * Date: 11/13/18
 * Time: 7:03 PM
 */

namespace App\Repositories\Contracts;


interface UserRepositoryInterface extends CoolRepositoryInterface
{

    /**
     * Users with Business Profiles
     *
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function businessUserQuery();

    /**
     * Users with User Profile ( Members )
     *
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function memberUserQuery();

    /**
     * Moderator Users
     *
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function moderatorUserQuery();

    /**
     * Phone Number
     *
     * @param $phone
     * @return mixed
     */
    public function wherePhoneQuery($phone);

    /**
     * Reset Model, Scope, Criteria
     *
     * @return mixed
     */
    public function reset();

    /**
     * Get by login (phone or email)
     *
     * @param string $login
     * @return mixed
     */
    public function getByLogin(string $login);

    /**
     * @param string $code
     * @return mixed
     */
    public function getByConfirmationCode(string $code);
}
