<?php
/**
 * Created by PhpStorm.
 * User: dev001
 * Date: 1/23/19
 * Time: 1:15 PM
 */

namespace Tests\Functional\Authentication;


use Tests\Functional\TestCase;

class LoginTest extends TestCase
{
    public function testLoginSuccess()
    {
        $this->visit('/login')
            ->type('admin@remnant.uz','email')
            ->type('123qwe','password')
            ->press('Login')
            ->seePageIs('/dashboard');
    }

    public function testLoginError()
    {
        $this->visit('/login')
            ->type('admin@remnant.uz','email')
            ->type('123qwe2','password')
            ->press('Login')
            ->seePageIs('/login');
    }
}
