<?php
/**
 * Created by PhpStorm.
 * User: dev001
 * Date: 12/18/18
 * Time: 8:41 PM
 */

namespace App\Services\Ingredient;

use App\Models\Ingredient;
use App\Models\Language;
use App\Models\Unit;
use App\Repositories\Contracts\IngredientRepositoryInterface;
use App\Services\Ingredient\Contracts\IngredientService as IngredientServiceInterface;
use Vinkla\Hashids\HashidsManager;

class IngredientService implements IngredientServiceInterface
{

    private $ingredient;

    private $hashManager;

    public function __construct(
        IngredientRepositoryInterface $ingredientRepository,
        HashidsManager $hashManager
    ) {
        $this->ingredient = $ingredientRepository;
        $this->hashManager = $hashManager;
    }

    /**
     * @param array $data
     *
     * @return mixed
     */
    public function store(array $data)
    {
        $ingredient = $this->ingredient->create([
            'unit_id' => array_get($data, 'unit_id'),
            'price' => array_get($data, 'price'),
            'name' => array_get($data, 'name')
        ]);

        $ingredient->hash = $this->hashManager->encode($ingredient->id);
        $ingredient->save();

        return $ingredient;
    }

    /**
     * @param       $id
     * @param array $data
     *
     * @return mixed
     */
    public function update($id, array $data)
    {
        $unit = Unit::find(array_get($data,'unit_id'));

        $ingredient = $this->ingredient->find($id);

        $ingredient->price = array_get($data, 'price');
        if($unit){
            $ingredient->unit()->associate($unit);
        }
        $ingredient->save();

        $translations = array_get($data, 'name');

        foreach (array_keys($translations) as $shortName) {
            $language = Language::where('short_name', $shortName)->first();
            if($language){
                $ingredient->translations()->update([
                    'name' => $translations[$language->short_name],
                    'lang_id' => $language->id
                ]);
            }
        }

        return $ingredient;
    }
}
