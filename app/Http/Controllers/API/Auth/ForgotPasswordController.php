<?php

namespace App\Http\Controllers\API\Auth;

use App\Http\Controllers\API\Controller;
use App\Http\Controllers\Traits\CommonResponse;
use App\Http\Requests\ForgotPasswordRequest;
use App\Http\Requests\ResetPasswordRequest;
use App\Repositories\Contracts\UserRepositoryInterface;
use App\Services\User\Contracts\UserService;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Password;
use App\Services\Notification\Contracts\SMSService as MessageService;

class ForgotPasswordController extends Controller
{
    use CommonResponse;

    /**
     * @var UserService
     */
    private $userService;

    /**
     * @var UserRepositoryInterface
     */
    private $userRepository;

    /**
     * @var MessageService
     */
    private $messageService;

    public function __construct(
        UserService $userService,
        MessageService $messageService,
        UserRepositoryInterface $userRepository
    ){
        $this->middleware('basic.auth');
        $this->userService = $userService;
        $this->messageService = $messageService;
        $this->userRepository = $userRepository;
    }

    /**
     * @param ForgotPasswordRequest $request
     *
     * @return \Illuminate\Http\JsonResponse|\Illuminate\Http\RedirectResponse
     */
    public function forgot(ForgotPasswordRequest $request)
    {
        $login = $request->get('login');

        if ($this->userService->isEmail($login))
        {
            $response = $this->broker()->sendResetLink(['email' => $login]);

            return $response == Password::RESET_LINK_SENT
                ? $this->sendSuccessResponse()
                : $this->messageSentFailedResponse();
        } else {
            $user = $this->userRepository->wherePhoneQuery($login)->first();
            $wasSent = $this->messageService->sendVerificationMessage($user);

            if(!$wasSent){
                return $this->messageSentFailedResponse();
            } else {
                return $this->sendSuccessResponse();
            }
        }
    }

    public function reset(ResetPasswordRequest $request)
    {
        if($this->userService->resetPassword($request->toArray())){
            return $this->sendSuccessResponse();
        } else {
            return $this->sendErrorResponse();
        }
    }

    /**
     * Get the broker to be used during password reset.
     *
     * @return \Illuminate\Contracts\Auth\PasswordBroker
     */
    public function broker()
    {
        return Password::broker();
    }

    private function messageSentFailedResponse()
    {
        return response()->json([
            'message' => trans('auth.failed_sms'),
            'code' => Response::HTTP_INTERNAL_SERVER_ERROR
        ], Response::HTTP_INTERNAL_SERVER_ERROR);
    }
}
