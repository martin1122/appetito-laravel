<?php

namespace App\Http\Requests\Traits;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Response;
use Illuminate\Validation\ValidationException;

trait LoginExistsValidationResponse
{
    protected function failedValidation(Validator $validator)
    {
        if(array_has($validator->errors()->messages(), 'login')){
            $responseMessage = trans('auth.register.already_taken');
            $statusCode = Response::HTTP_FORBIDDEN;
        }else {
            $responseMessage = trans('api.common.validation_error');
            $statusCode = Response::HTTP_UNPROCESSABLE_ENTITY;
        }

        throw (new ValidationException($validator, response([
            'message' => $responseMessage,
            'code'  => $statusCode,
            'errors' => $validator->errors()
        ], Response::HTTP_BAD_REQUEST)))
            ->errorBag($this->errorBag)
            ->redirectTo($this->getRedirectUrl());
    }
}