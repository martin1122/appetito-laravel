<?php

namespace App\Exceptions;

use Exception;
use Illuminate\Http\Response;

class FailedAuthorization extends Exception
{
    public function render()
    {
        return response([
            'message' => trans('api.common.not_authorized'),
            'code' => Response::HTTP_UNAUTHORIZED
        ], Response::HTTP_BAD_REQUEST);
    }
}
