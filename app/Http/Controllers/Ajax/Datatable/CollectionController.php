<?php
/**
 * Created by PhpStorm.
 * User: dev001
 * Date: 1/21/19
 * Time: 8:42 PM
 */

namespace App\Http\Controllers\Ajax\Datatable;


use App\Http\Controllers\Controller;
use App\Models\Language;
use Illuminate\Support\Facades\DB;
use Yajra\DataTables\DataTables;

class CollectionController extends Controller
{
    public function index(){

        return DataTables::of($this->query())->make(true);
    }

    private function query()
    {
        return DB::table('collections')
            ->select('collections.id', 'collection_translations.name')
            ->join('collection_translations', 'collections.id', '=', 'collection_translations.collection_id')
            ->where('lang_id', Language::ID_DEFAULT);
    }
}
