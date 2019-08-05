<?php

namespace App\Http\Requests\Traits;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Response;
use Illuminate\Validation\ValidationException;

trait NoSuchLoginValidationResponse
{
    protected function failedValidation(Validator $validator)
    {
        if(array_has($validator->errors()->messages(), 'login')){
            $responseMessage = trans('auth.login.no_such_login');
        }else {
            $responseMessage = trans('api.common.validation_error');
        }

        throw (new ValidationException($validator, response([
            'message' => $responseMessage,
            'code'  => Response::HTTP_UNPROCESSABLE_ENTITY,
            'errors' => $validator->errors()
        ], Response::HTTP_BAD_REQUEST)))
            ->errorBag($this->errorBag)
            ->redirectTo($this->getRedirectUrl());
    }
}