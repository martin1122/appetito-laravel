<?php

namespace App\Repositories\Criteria\Recipe;


use App\Models\Language;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Prettus\Repository\Contracts\CriteriaInterface;
use Prettus\Repository\Contracts\RepositoryInterface;

class FilterRequestCriteria implements CriteriaInterface
{

    private $request;

    private $details = [
        'fat',
        'carbs',
        'protein',
        'calorie',
        'time'
    ];

    public function __construct(Request $request)
    {
        $this->request = $request;
    }

    /**
     * Apply criteria in query repository
     *
     * @param                     $model
     * @param RepositoryInterface $repository
     *
     * @return mixed
     */
    public function apply($model, RepositoryInterface $repository)
    {
        $model = $this->getDetail($model);

        return $model;
    }

    private function getDetail($model)
    {
        $model = $model->join('recipe_details', 'recipes.id', '=', 'recipe_details.recipe_id');

        foreach ($this->details as $detail){
            $min = $this->request->query("{$detail}_min");
            $max = $this->request->query("{$detail}_max");

            if($detail == "time"){
                $detail = "preparation_time";
            }

            $model = $this->getIntervalWhere($model, $detail, $min, $max);
        }

        $nationName = $this->request->query('nation');
        $difficultyLevel = $this->request->query('level');

        if($nationName) {
            $nationIds = DB::table('nations')
                ->join('nation_translations', 'nations.id', '=', 'nation_translations.nation_id')
                ->where([
                    ['nation_translations.name', $nationName],
                    ['nation_translations.lang_id', Language::getIdByName($this->request->header('Accept-Language'))]
                ])->pluck('nations.id')->toArray();

            $model = $model->whereIn('nation_id', $nationIds);
        }

        if($difficultyLevel) {
            $difficultyId = DB::table('difficulties')
                ->where('level', $difficultyLevel)
                ->pluck('id')->toArray();

            $model = $model->where('difficulty_id', $difficultyId);
        }
        return $model;
    }

    private function getIntervalWhere($model, $column, $valueMin, $valueMax)
    {
        if(!$valueMin && !$valueMax){
            return $model;
        }else if($valueMin && !$valueMax) {
            return $model->where("recipe_details.$column", '>=', $valueMin);
        }else if(!$valueMin && $valueMax) {
            return $model->where("recipe_details.$column", '<=', $valueMax);
        }else {
            return $model->where([
                ["recipe_details.$column", '>=', $valueMin],
                ["recipe_details.$column", '<=', $valueMax],
            ]);
        }
    }
}
