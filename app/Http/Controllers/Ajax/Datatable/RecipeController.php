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

class RecipeController extends Controller
{
    public function index(){

        return DataTables::of($this->query())->make(true);
    }

    private function query()
    {
        return DB::table('recipes')
            ->select('recipes.id', 'recipe_translations.name')
            ->join('recipe_translations', 'recipes.id', '=', 'recipe_translations.recipe_id')
            ->where('recipe_translations.lang_id', Language::ID_DEFAULT);
    }
}
