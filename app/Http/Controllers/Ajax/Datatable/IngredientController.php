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

class IngredientController extends Controller
{
    public function index(){

        return DataTables::of($this->query())->make(true);
    }

    private function query()
    {
        return DB::table('ingredients')
            ->select('ingredients.id', 'ingredients.price', 'ingredient_translations.name')
            ->join('ingredient_translations', 'ingredients.id', '=', 'ingredient_translations.ingredient_id')
            ->where('lang_id', Language::ID_DEFAULT);
    }
}
