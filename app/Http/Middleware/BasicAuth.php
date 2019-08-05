<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\App;

class BasicAuth
{
    private $request;
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */

    public function handle($request, Closure $next)
    {
        $this->request = $request;
        App::setLocale($request->header('Accept-Language'));
        $authorizationHeader = $request->header('Authorization');

        if(!$authorizationHeader){
            return $this->failedResponse();
        }

        if(!$this->validate($authorizationHeader)){
            return $this->failedResponse();
        }

        return $next($this->request);
    }

    private function validate(string $header)
    {
        $parts = explode(":",$header);
        if (sizeof($parts) < 2) {
            return false;
        }
        $login = $parts[0];
        $hash = $parts[1];

        if(isset($login) && isset($hash)){
            switch ($login) {
                case env('IOS_LOGIN'):
                    if($this->getMd5Key('ios') === strtoupper($hash)){
                        $this->request->request->add(['client' => 'ios']);
                        return true;
                    } else {
                        return false;
                    }
                    break;
                case env('ANDROID_LOGIN'):
                    if($this->getMd5Key('android') === strtoupper($hash)){
                        $this->request->request->add(['client' => 'android']);
                        return true;
                    } else {
                        return false;
                    }
                    break;
                default:
                    return false;
                    break;
            }
        } else {
            return false;
        }
    }

    private function getMd5Key(string $client)
    {
        return strtoupper(md5(config('auth.basic.' . $client . '.password')));
    }

    private function failedResponse()
    {
        return response()->json([
            'message' => trans('auth.login.unauthorized'),
            'code' => Response::HTTP_UNAUTHORIZED
        ], Response::HTTP_BAD_REQUEST);
    }
}
