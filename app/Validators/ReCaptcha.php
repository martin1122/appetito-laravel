<?php
/**
 * Created by PhpStorm.
 * User: dev001
 * Date: 2/28/19
 * Time: 5:29 PM
 */

namespace App\Validators;


use GuzzleHttp\Client;

class ReCaptcha
{
    const VERIFICATION_URL = 'https://www.google.com/recaptcha/api/siteverify';

    public function validate($attribute, $value, $parameters, $validator)
    {
        $client = new Client();
        $response = $client->post(self::VERIFICATION_URL, [
            'form_params' => [
                'secret' => env('GOOGLE_RECAPTCHA_SECRET'),
                'response' => $value
            ]
        ]);

        $body = json_decode((string)$response->getBody());
        return $body->success;
    }
}
