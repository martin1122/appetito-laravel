<?php
/**
 * Created by PhpStorm.
 * User: dev001
 * Date: 1/23/19
 * Time: 1:29 PM
 */

namespace Tests\Functional\Authentication;


use Tests\Functional\TestCase;

class RegisterTest extends TestCase
{
    public function testRegisterFailOnRecaptcha()
    {
        $this->visit('/register')
            ->type('Test User','name')
            ->type(str_random(6)."@remnant.uz",'email')
            ->type('123qwe','password')
            ->type('123qwe','password_confirmation')
            ->press('Register')
            ->seePageIs('/register');
    }

    public function testRegisterNoName()
    {
        $this->visit('/register')
            ->type(str_random(6)."@remnant.uz",'email')
            ->type('123qwe','password')
            ->type('123qwe','password_confirmation')
            ->press('Register')
            ->seePageIs('/register');
    }

}
