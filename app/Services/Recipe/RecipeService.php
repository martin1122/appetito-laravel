<?php
/**
 * Created by PhpStorm.
 * User: akbar
 * Date: 11/17/18
 * Time: 10:41 PM
 */

namespace App\Services\Recipe;
use App\Models\User;
use App\Services\Recipe\Contracts\RecipeService as RecipeServiceInterface;

use Illuminate\Database\DatabaseManager;
use Illuminate\Log\Logger;

class RecipeService implements RecipeServiceInterface
{
    /**
     * @var DatabaseManager
     */
    private $databaseManager;

    /**
     * @var Logger
     */
    private $logger;

    /**
     * @var ApiRecipeBuilder
     */
    private $apiRecipeBuilder;

    /**
     * RecipeService constructor.
     *
     * @param DatabaseManager  $databaseManager
     * @param ApiRecipeBuilder $recipeBuilder
     * @param Logger           $logger
     */
    public function __construct(
        DatabaseManager $databaseManager,
        ApiRecipeBuilder $recipeBuilder,
        Logger $logger
    ){
        $this->databaseManager = $databaseManager;
        $this->apiRecipeBuilder = $recipeBuilder;
        $this->logger = $logger;
    }

    /**
     * @param array $data
     *
     * @param int   $userId
     *
     * @return mixed
     * @throws \Exception
     */
    public function storeRecipeApi(array $data, int $userId)
    {
        $this->databaseManager->beginTransaction();
        $recipe = [];

        try{
            $this->apiRecipeBuilder->createRecipe($data, $userId);

            if($categories = array_get($data, 'categories'))
                $this->apiRecipeBuilder->addCategories($categories);

            if ($directions = array_get($data, 'directions'))
                $this->apiRecipeBuilder->addDirections($directions);

            if ($ingredients = array_get($data, 'ingredients'))
                $this->apiRecipeBuilder->addIngredients($ingredients);

            if ($images = array_get($data, 'images'))
                $this->apiRecipeBuilder->addImages($images);

            $recipe = $this->apiRecipeBuilder->getRecipe();
        }catch (\Exception $e){

            $this->logger->error("Couldn't store recipe");
            $this->logger->error($e);
            $this->databaseManager->rollBack();
        }

        $this->databaseManager->commit();

        return $recipe;
    }

    /**
     * @param       $id
     * @param array $data
     *
     * @return mixed
     * @throws \Exception
     */
    public function update($id, array $data)
    {
        $this->databaseManager->beginTransaction();

        try{
            $recipe = null;

        }catch (\Exception $e){

            $this->logger->error("Couldn't update recipe");
            $this->logger->error($e);
            $this->databaseManager->rollBack();
        }

        return $recipe;
    }


    /**
     * @param $id
     *
     * @return bool
     * @throws \Exception
     */
    public function delete($id)
    {
        $this->databaseManager->beginTransaction();
        try {


            return true;

        }catch (\Exception $e){
            $this->logger->error("Couldn't delete recipe");
            $this->logger->error($e);
            $this->databaseManager->rollBack();
        }
    }
}
