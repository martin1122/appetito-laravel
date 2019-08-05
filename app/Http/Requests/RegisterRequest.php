<?php

namespace App\Http\Requests;

use App\Http\Requests\Traits\LoginExistsValidationResponse;
use App\Services\User\Contracts\UserService;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\App;

class RegisterRequest extends FormRequest
{
    use LoginExistsValidationResponse;

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
     * @param UserService $service
     * @return array
     */
    public function rules(UserService $service)
    {
        if($service->isEmail($this->input('login'))){
            return [
                'login'         => 'required|unique:users,email',
                'password'      => 'required|min:6'
            ];
        }else{
            return [
                'login'         => 'required|unique:users,phone',
                'password'      => 'required|min:6'
            ];
        }
    }
}
