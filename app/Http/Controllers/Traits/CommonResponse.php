<?php

namespace App\Http\Controllers\Traits;

use Illuminate\Http\Response;

trait CommonResponse
{
    protected function sendSuccessResponse()
    {
        return response()->json([
            'message'=> trans('api.common.success'),
            'code' => Response::HTTP_OK
        ], Response::HTTP_OK);
    }

    protected function sendErrorResponse()
    {
        return response()->json([
            'message' => trans('api.common.error'),
            'code' => Response::HTTP_INTERNAL_SERVER_ERROR
        ], Response::HTTP_INTERNAL_SERVER_ERROR);
    }

    protected function userNotFoundResponse()
    {
        return response()->json([
            'message' => trans(''),
            'code' => Response::HTTP_NOT_FOUND
        ]);
    }
}