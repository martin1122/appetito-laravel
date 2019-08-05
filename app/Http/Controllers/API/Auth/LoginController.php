<?php

namespace App\Http\Controllers\API\Auth;

use App\Http\Controllers\API\Controller;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\SocialLoginRequest;
use App\Repositories\Contracts\UserRepositoryInterface;
use App\Repositories\Criteria\ActiveEntityCriteria;
use App\Services\Auth\Contracts\AuthService;
use App\Services\User\Contracts\UserService;
use Illuminate\Http\Response;

class LoginController extends Controller
{

    /**
     * @var UserRepositoryInterface
     */
    private $userRepository;

    /**
     * @var UserService
     */
    private $userService;

    /**
     * LoginController constructor.
     * @param UserRepositoryInterface $userRepository
     * @param UserService $userService
     */
    public function __construct(
        UserRepositoryInterface $userRepository,
        UserService $userService
    ){
        $this->userRepository = $userRepository;
        $this->userService = $userService;
    }

    /**
     * @param LoginRequest $request
     * @param AuthService $auth
     * @return \Illuminate\Http\JsonResponse
     */
    public function login(LoginRequest $request, AuthService $auth){
        $data = $auth->loginUser($request->toArray());

        if(!$data){
            return response()->json([
                'message' => trans('auth.login.unauthorized'),
                'code' => Response::HTTP_UNAUTHORIZED
            ], Response::HTTP_BAD_REQUEST);
        }

        $username = $this->userService->getUsername($request->input('login'));
        $this->userRepository->pushCriteria(ActiveEntityCriteria::class);
        $user = $this->userRepository->findWhere(['username' => $username])->first();

        if($user){
            return response()->json([
                'message' => trans('api.common.success'),
                'code' => Response::HTTP_OK,
                'payload' => [
                    'access_token'  => $data['access_token'],
                    'refresh_token' => $data['refresh_token'],
                    'expire_time'   => $data['expires_in'],
                    'username'      => $user->username
                ]
            ], Response::HTTP_OK);
        }else{
            return response()->json([
                'message' => trans('auth.not_active'),
                'code' => Response::HTTP_FORBIDDEN
            ], Response::HTTP_BAD_REQUEST);
        }
    }

    /**
     * @param SocialLoginRequest $request
     * @param AuthService $auth
     * @return \Illuminate\Http\JsonResponse
     */
    public function loginGoogle
    (
        SocialLoginRequest $request,
        AuthService $auth
    ){
        $response = $auth->loginGoogleUser($request->toArray());

        if(!$response){
            return response()->json([
                'message' => trans('auth.failed'),
                'code' => Response::HTTP_UNAUTHORIZED
            ], Response::HTTP_BAD_REQUEST);
        }

        return response()->json([
            'message' => trans('api.common.success'),
            'code' => Response::HTTP_OK,
            'payload' => [
                'access_token'  => $response['access_token'],
                'refresh_token' => $response['refresh_token'],
                'expire_time'   => $response['expires_in']
            ]
        ], Response::HTTP_OK);
    }

    /**
     * @param SocialLoginRequest $request
     * @param AuthService $auth
     * @return \Illuminate\Http\JsonResponse
     */
    public function loginFacebook
    (
        SocialLoginRequest $request,
        AuthService $auth
    ){
        $response = $auth->loginFacebookUser($request->toArray());

        if(!$response){
            return response()->json([
                'message' => trans('auth.failed'),
                'code' => Response::HTTP_UNAUTHORIZED
            ], Response::HTTP_BAD_REQUEST);
        }

        return response()->json([
            'message' => trans('api.common.success'),
            'code' => Response::HTTP_OK,
            'payload' => [
                'access_token'  => $response['access_token'],
                'refresh_token' => $response['refresh_token'],
                'expire_time'   => $response['expires_in']
            ]
        ], Response::HTTP_OK);
    }
}
