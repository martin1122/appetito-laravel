<?php

namespace App\Http\Requests\Traits;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Response;
use Illuminate\Validation\ValidationException;

trait CustomValidationResponse
{
    protected function failedValidation(Validator $validator)
    {
        $responseMessage = trans('api.common.validation_error');

        throw (new ValidationException($validator, response([
            'message' => $responseMessage,
            'code'  => Response::HTTP_UNPROCESSABLE_ENTITY,
            'errors' => $validator->errors()
        ], Response::HTTP_BAD_REQUEST)))
            ->errorBag($this->errorBag)
            ->redirectTo($this->getRedirectUrl());
    }
}