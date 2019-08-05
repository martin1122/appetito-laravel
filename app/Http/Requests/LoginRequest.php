<?php

namespace App\Http\Requests;

use App\Http\Requests\Traits\CustomValidationResponse;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\App;

class LoginRequest extends FormRequest
{
    use CustomValidationResponse;

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
            'client_id'     => 'required',
            'client_secret' => 'required',
            'login'         => 'required',
            'password'      => 'required'
        ];
    }
}
