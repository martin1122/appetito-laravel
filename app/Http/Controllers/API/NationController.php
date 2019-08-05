<?php
/**
 * Created by PhpStorm.
 * User: dev001
 * Date: 2/15/19
 * Time: 4:17 PM
 */

namespace App\Http\Controllers\API;


use App\Models\NationTranslation;

class NationController extends Controller
{
    public function index()
    {
        $nations = NationTranslation::all()->pluck('name')->toArray();

        return $nations;
    }
}
