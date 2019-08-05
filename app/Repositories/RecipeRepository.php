<?php
/**
 * Created by PhpStorm.
 * User: akbar
 * Date: 11/17/18
 * Time: 10:22 PM
 */

namespace App\Repositories;

use App\Models\Language;
use App\Models\Recipe;
use App\Repositories\Contracts\RecipeRepositoryInterface;
use App\Repositories\Criteria\ActiveEntityCriteria;
use App\Repositories\Criteria\Recipe\ConfirmedRecipeCriteria;
use App\Repositories\Criteria\Recipe\FilterRequestCriteria;
use Illuminate\Support\Facades\DB;

class RecipeRepository extends CoolRepository implements RecipeRepositoryInterface
{

    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return Recipe::class;
    }

    public function filterActiveRecipes()
    {
        return $this->pushCriteria(app(ActiveEntityCriteria::class));
    }

    public function filterConfirmedRecipes()
    {
        return $this->pushCriteria(app(ConfirmedRecipeCriteria::class));
    }

    public function getWhereNameLike(string $name)
    {
        return $this->model->where('title', 'like', "%{$name}%");
    }

    public function filterByDetails()
    {
        return $this->pushCriteria(app(FilterRequestCriteria::class));
    }
}
