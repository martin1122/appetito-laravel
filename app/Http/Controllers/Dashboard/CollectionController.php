<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Repositories\Contracts\CollectionRepositoryInterface;
use App\Services\Collection\Contracts\CollectionService;
use Illuminate\Http\Request;

class CollectionController extends Controller
{

    /**
     * Directory Path to view blades
     *
     * @var string
     */
    protected $viewPath = 'dashboard.collection';

    public function index()
    {
        return view($this->view('index'));
    }

    public function create()
    {
        return view($this->view('create'));
    }

    public function store(Request $request, CollectionService $collectionService)
    {
        $this->validate($request, [
            'name' => 'required',
        ]);

        $collectionService->store($request->only('name', 'description', 'image'));

        return redirect()->route('dashboard.collections.index');
    }

    public function edit($id, CollectionRepositoryInterface $collectionRepository)
    {
        $collection = $collectionRepository->with([
            'image',
            'translations',
        ])->find($id);

        return view($this->view('edit'),[
            'collection' => $collection
        ]);
    }

    public function update($id, Request $request, CollectionService $collectionService)
    {
        $this->validate($request, [
            'name' => 'required',
        ]);

        $collectionService->update($id, $request->only('name', 'description', 'image'));

        return redirect()->route('dashboard.collections.index');
    }

    public function delete($id, CollectionService $collectionService)
    {
        $collectionService->delete($id);

        return redirect()->route('dashboard.collections.index');
    }
}
