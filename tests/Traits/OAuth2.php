<?php
/**
 * Created by PhpStorm.
 * User: dev001
 * Date: 12/5/18
 * Time: 4:36 PM
 */

namespace Tests\Traits;


use Illuminate\Support\Facades\DB;

trait OAuth2
{

    protected $clientId = 2;


    public function getClientSecret(){
        return DB::table('oauth_clients')->where('id', $this->clientId)->first()->secret;
    }

}
