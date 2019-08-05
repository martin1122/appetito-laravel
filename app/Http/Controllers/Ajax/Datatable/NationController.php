<?php
/**
 * Created by PhpStorm.
 * User: dev001
 * Date: 12/13/18
 * Time: 8:26 PM
 */

namespace App\Http\Controllers\Ajax\Datatable;


use App\Http\Controllers\Controller;
use App\Models\Language;
use Illuminate\Support\Facades\DB;
use Yajra\DataTables\DataTables;

class NationController extends Controller
{
    public function index(){

        return DataTables::of($this->query())->make(true);
    }

    private function query()
    {
        return DB::table('nations')
            ->select('nations.id', 'nations.native_name', 'nation_translations.name')
            ->join('nation_translations', 'nations.id', '=', 'nation_translations.nation_id')
            ->where('lang_id', Language::ID_DEFAULT);
    }
}
