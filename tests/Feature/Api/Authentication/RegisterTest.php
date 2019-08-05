<?php

namespace Tests\Feature\Api\Authentication;

use Tests\TestCase;

class RegisterTest extends TestCase
{
    /**
     * Successful register with email test
     *
     * @return void
     */
    public function testRegisterWithEmailSuccessfully()
    {
        $response = $this->withHeaders([
            'Accept-Language' => 'uz',
            'Authorization' => '5TsNiBvHCYrQRBK3:A4F618DE19D4E8F867F55725AB624700'
        ])->json('POST', 'api/v1/register', [
            'login' => str_random(6).'@gmail.com',
            'password' => str_random(10),
            'name' => "Name " . str_random(5)
        ]);

        $response->assertStatus(200)
            ->assertJsonStructure([
                'message',
                'code'
            ])
            ->assertJson([
                'code' => 201
            ]);
    }

    /**
     * Successful register with phone test
     *
     * @return void
     */
    public function testRegisterWithPhoneSuccessfully()
    {
        $response = $this->withHeaders([
            'Accept-Language' => 'uz',
            'Authorization' => '5TsNiBvHCYrQRBK3:A4F618DE19D4E8F867F55725AB624700'
        ])->json('POST', 'api/v1/register', [
            'login' => '+99890' . rand(4000000,9000000),
            'password' => str_random(10),
            'name' => "Name " . str_random(5)
        ]);

        $response->assertStatus(200)
            ->assertJsonStructure([
                'message',
                'code'
            ])
            ->assertJson([
                'code' => 201
            ]);
    }

    /**
     * Successful register with email test
     *
     * @return void
     */
    public function testErrorWhenWithoutAuthorization()
    {
        $response = $this->json('POST', 'api/v1/register', [
            'login' => str_random(6).'@gmail.com',
            'password' => str_random(10),
            'name' => "Name " . str_random(5)
        ]);

        $response->assertStatus(400)
            ->assertJsonStructure([
                'message',
                'code'
            ])
            ->assertJson([
                'code' => 401
            ]);
    }
}
