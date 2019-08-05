<?php
/**
 * Created by PhpStorm.
 * User: dev001
 * Date: 12/18/18
 * Time: 7:44 PM
 */

namespace App\Http\Controllers\Dashboard;


use App\Http\Controllers\Controller;
use App\Models\Unit;
use App\Repositories\Contracts\IngredientRepositoryInterface;
use App\Services\Ingredient\Contracts\IngredientService as IngredientServiceInterface;
use Illuminate\Http\Request;

class IngredientController extends Controller
{

    /**
     * Directory Path to view blades
     *
     * @var string
     */
    protected $viewPath = 'dashboard.ingredient';

    /**
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function index()
    {
        return view($this->view('index'));
    }

    /**
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function create()
    {
        return view($this->view('create'), [
            'options' => $this->getAllUnits()
        ]);
    }

    /**
     * @param Request                    $request
     * @param IngredientServiceInterface $ingredientService
     *
     * @return \Illuminate\Http\RedirectResponse
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request, IngredientServiceInterface $ingredientService)
    {
        $this->validate($request,[
            'name' => 'required',
            'price' => 'numeric'
        ]);

        $ingredientService->store($request->only(['name', 'unit_id', 'price']));

        return redirect()->route('dashboard.ingredients.index');
    }

    /**
     * @param                               $id
     * @param IngredientRepositoryInterface $ingredientRepository
     *
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function edit($id, IngredientRepositoryInterface $ingredientRepository)
    {
        $ingredient = $ingredientRepository->find($id);

        return view($this->view('edit'), [
            'ingredient' => $ingredient,
            'options'    => $this->getAllUnits($ingredient->unit_id)
        ]);
    }

    public function update($id, Request $request, IngredientServiceInterface $ingredientService)
    {
        $this->validate($request,[
            'name' => 'required',
            'price' => 'numeric'
        ]);

        $ingredientService->update($id, $request->only(['name', 'unit_id', 'price']));

        return redirect()->route('dashboard.ingredients.index');
    }

    public function delete($id, IngredientRepositoryInterface $ingredientRepository){
        $ingredientRepository->delete($id);

        return redirect()->route('dashboard.ingredients.index');
    }

    /**
     * Get all units
     *
     * @param null $unit_id
     *
     * @return array
     */
    private function getAllUnits($unit_id = null)
    {
        $units = Unit::with('translations')->get();

        $options = [];

        foreach ($units as $unit){

            $unit_id == $unit->id ? $selected = true : $selected = false;

            $options = array_prepend($options, [
                'value' => $unit->id,
                'text' => $unit->translation('name', 'uz'),
                'selected' => $selected
            ]);
        }

        return $options;
    }
}
