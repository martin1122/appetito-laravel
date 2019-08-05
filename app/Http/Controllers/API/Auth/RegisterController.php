<?php

namespace App\Http\Controllers\API\Auth;

use App\Http\Controllers\API\Controller;
use App\Http\Requests\RegisterRequest;
use App\Jobs\ProcessEmailVerification;
use App\Services\Auth\Contracts\AuthService;
use App\Services\Notification\Contracts\SMSService as MessageService;
use App\Services\User\Contracts\UserService;
use Illuminate\Http\Response;

class RegisterController extends Controller
{
    /**
     * Protected with Basic Auth
     *
     * RegisterController constructor.
     */
    public function __construct()
    {
        $this->middleware('basic.auth');
    }

    public function register(
        RegisterRequest $request,
        AuthService $authService,
        UserService $userService,
        MessageService $messageService
    ){
        $data = $request->toArray();

        if($user = $authService->registerUser(array_merge($data, ['language' => $request->header('Accept-Language')]))){

            if($userService->isEmail($request->input('login'))){
                ProcessEmailVerification::dispatch($user);
            } else {
                $wasSent = $messageService->sendVerificationMessage($user);

                if(!$wasSent){
                    return $this->messageSentFailedResponse();
                }
            }

            return $this->successfullyCreatedResponse();
        }else{
            return $this->unableToCreateResponse();
        }
    }

    private function messageSentFailedResponse()
    {
        return response()->json([
            'message' => trans('auth.failed_sms'),
            'code' => Response::HTTP_INTERNAL_SERVER_ERROR
        ], Response::HTTP_INTERNAL_SERVER_ERROR);
    }

    private function successfullyCreatedResponse()
    {
        return response()->json([
            'message' => trans('auth.register.created'),
            'code' => Response::HTTP_CREATED
        ], Response::HTTP_OK);
    }

    private function unableToCreateResponse()
    {
        return response()->json([
            'message' => trans('auth.register.unable_create'),
            'code' => Response::HTTP_METHOD_NOT_ALLOWED
        ], Response::HTTP_INTERNAL_SERVER_ERROR);
    }
}
