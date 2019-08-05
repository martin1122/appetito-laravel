<?php
/**
 * Created by PhpStorm.
 * User: dev001
 * Date: 12/5/18
 * Time: 5:47 PM
 */

namespace App\Models;


use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class OAuth2
{
    /**
     * Client Id given to every client application
     */
    const CLIENT_ID = 2;

    /**
     * @param $clientId
     * @param $clientSecret
     *
     * @return bool
     */
    public static function authorize($clientId, $clientSecret)
    {
        return $clientId == self::CLIENT_ID &&
            $clientSecret == self::getClientSecret();
    }

    /**
     * Retrieve client_secret from OAuth2
     *
     * @return \Illuminate\Database\Eloquent\Model|\Illuminate\Database\Query\Builder|object
     */
    private static function getClientSecret()
    {
        return DB::table('oauth_clients')
            ->where('id',self::CLIENT_ID)->first()->secret;
    }
}
