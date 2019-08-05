<?php

namespace App\Services\Recipe\Contracts;

use App\Models\Recipe;

interface RecipeBuilder
{
    /**
     * Create plain Recipe
     *
     * @param array $data
     * @param int   $userId
     */
    public function createRecipe(array $data, int $userId);

    /**
     * @param array $data
     */
    public function addDirections(array $data);

    /**
     * @param array $data
     */
    public function addCategories(array $data);

    /**
     * @param array $data
     */
    public function addIngredients(array $data);

    /**
     * @param array $data
     */
    public function addImages(array $data);

    /**
     * Get ready recipe
     *
     * @return Recipe
     */
    public function getRecipe();
}
