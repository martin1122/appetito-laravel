<?php

namespace App\Http\Controllers\Dashboard;

use App\Models\Unit;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Services\Unit\Contracts\UnitService as UnitServiceInterface;

class UnitController extends Controller
{
    protected $viewPath = "dashboard.unit.";

    /**
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function index()
    {
        $units = Unit::all();
        return view($this->view('index'), compact('units'));
    }

    /**
     * @return $this
     */
    public function create()
    {
        return view($this->view('create'));
    }

    /**
     * @param Request $request
     * @param UnitServiceInterface $unit
     * @return \Illuminate\Http\RedirectResponse
     * @internal param Request $request
     */
    public function store(Request $request, UnitServiceInterface $unit)
    {
        $this->validate($request,[
            'name' => 'required'
        ]);

        $unit->store($request->only(['name']));

        return redirect()->route('dashboard.units.index');
    }

    public function edit($id)
    {
        $unit = Unit::findOrFail($id);
        return view($this->view('edit'), compact('unit'));
    }

    public function update(Request $request, $id, UnitServiceInterface $unit)
    {
        $this->validate($request, [
            'name' => 'required'
        ]);

        $unit->update($id, $request->only(['name']));

        return redirect()->route('dashboard.units.index');
    }

    public function delete($id)
    {
        Unit::destroy($id);
        return redirect()->route('dashboard.units.index');
    }
}
