<?php
/**
 * Created by PhpStorm.
 * User: dev001
 * Date: 12/12/18
 * Time: 4:41 PM
 */

namespace App\Http\Controllers\Dashboard;


use App\Http\Controllers\Controller;
use App\Models\Nation;
use Illuminate\Http\Request;
use App\Services\Nation\Contracts\NationService as NationServiceInterface;


class NationController extends Controller
{
    protected $viewPath = 'dashboard.nation';

    public function index()
    {
        return view($this->view('index'));
    }

    public function create()
    {
        return view($this->view('create'));
    }

    /**
     * @param Request                $request
     * @param NationServiceInterface $nation
     *
     * @return \Illuminate\Http\RedirectResponse
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request, NationServiceInterface $nation)
    {
        $this->validate($request,[
            'name' => 'required'
        ]);

        $nation->store($request->only(['name', 'native_name']));

        return redirect()->route('dashboard.nations.index');
    }

    public function edit($id)
    {
        $nation = Nation::findOrFail($id);

        return view($this->view('edit'), compact('nation'));
    }

    public function update($id, Request $request, NationServiceInterface $nation)
    {
        $this->validate($request,[
            'name' => 'required'
        ]);

        $nation->update($id, $request->only(['name', 'native_name']));

        return redirect()->route('dashboard.nations.index');
    }

    public function delete($id)
    {
        Nation::destroy($id);

        return redirect()->route('dashboard.nations.index');
    }
}
