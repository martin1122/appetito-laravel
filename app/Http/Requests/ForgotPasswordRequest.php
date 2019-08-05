<?php

namespace App\Http\Requests;

use App\Http\Requests\Traits\NoSuchLoginValidationResponse;
use App\Services\User\Contracts\UserService;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\App;

class ForgotPasswordRequest extends FormRequest
{
    use NoSuchLoginValidationResponse;

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
                'login'         => 'required|exists:users,email',
            ];
        }else{
            return [
                'login'         => 'required|exists:users,phone',
            ];
        }
    }
}
