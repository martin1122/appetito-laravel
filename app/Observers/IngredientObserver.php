<?php

namespace App\Observers;

use App\Models\Ingredient;
use Vinkla\Hashids\HashidsManager;

class IngredientObserver
{
    /**
     * @var HashidsManager
     */
    private $hashManager;

    /**
     * IngredientObserver constructor.
     *
     * @param HashidsManager $hashManager
     */
    public function __construct(HashidsManager $hashManager)
    {
        $this->hashManager = $hashManager;
    }

    /**
     * Handle the ingredient "created" event.
     *
     * @param Ingredient $ingredient
     *
     * @return void
     */
    public function created(Ingredient $ingredient)
    {
        $ingredient->hash = $this->hashManager->encode($ingredient->id);
        $ingredient->save();
    }

    /**
     * Handle the ingredient "updated" event.
     *
     * @param Ingredient $ingredient
     *
     * @return void
     */
    public function updated(Ingredient $ingredient)
    {
        //
    }

    /**
     * Handle the ingredient "deleted" event.
     *
     * @param Ingredient  $ingredient
     *
     * @return void
     */
    public function deleted(Ingredient $ingredient)
    {
        //
    }

    /**
     * Handle the ingredient "restored" event.
     *
     * @param  Ingredient  $ingredient
     *
     * @return void
     */
    public function restored(Ingredient $ingredient)
    {
        //
    }

    /**
     * Handle the ingredient "force deleted" event.
     *
     * @param  Ingredient  $ingredient
     *
     * @return void
     */
    public function forceDeleted(Ingredient $ingredient)
    {
        //
    }
}
