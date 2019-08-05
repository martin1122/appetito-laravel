<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    /**
     * @param $blade
     *
     * @return string
     */
    protected function view($blade){
        if(isset($this->viewPath)){
            $blade = "{$this->viewPath}.{$blade}";
        }

        return $blade;
    }
}
