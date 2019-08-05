<?php

namespace App\Http\Requests\Traits;

use App\Exceptions\FailedAuthorization;

trait FailedAuthorizationResponse
{
    /**
     * Fired if authorize() method is failed
     *
     * @throws FailedAuthorization
     */
    protected function failedAuthorization()
    {
        throw new FailedAuthorization('This action is unauthorized.');
    }
}