<?php

namespace App\Http\Controllers\API\Auth;

use App\Http\Controllers\API\Controller;
use App\Http\Requests\ConfirmPasswordRequest;
use App\Services\User\Contracts\UserService;
use Illuminate\Http\Response;

class ConfirmPasswordController extends Controller
{
    private $userService;

    public function __construct(UserService $service)
    {
        $this->userService = $service;
    }

    public function password(ConfirmPasswordRequest $request)
    {
        $code = $request->get('code');
        $login = $request->get('login');

        if($this->userService->verifyUserCode($login, $code)) {
            $this->userService->setCodeConfirmed($login);
            return $this->responseCodeConfirmed();
        } else {
            return $this->responseCodeNotConfirmed();
        }

    }

    public function register(ConfirmPasswordRequest $request)
    {
        $code = $request->get('code');
        $login = $request->get('login');

        if($this->userService->verifyUserCode($login, $code)) {
           $this->userService->activateUser($login);
           return $this->responseActivatedSuccessfully();
        } else {
           return $this->responseCodeNotConfirmed();
        }

    }

    private function responseActivatedSuccessfully()
    {
        return response()->json([
            'message' => trans('auth.register.activated'),
            'code' => Response::HTTP_OK
        ], Response::HTTP_OK);
    }

    private function responseCodeNotConfirmed()
    {
        return response()->json([
            'message' => trans('auth.wrong_code'),
            'code' => Response::HTTP_FORBIDDEN
        ], Response::HTTP_BAD_REQUEST);
    }

    private function responseCodeConfirmed()
    {
        return response()->json([
            'message' => trans('api.common.success'),
            'code' => Response::HTTP_OK
        ], Response::HTTP_OK);
    }
}