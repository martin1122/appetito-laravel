<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\App;
use Illuminate\Validation\ValidationException;

class StoreImageRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'image' => 'required|image|max:5121'
        ];
    }

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
