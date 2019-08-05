<?php

namespace App\Http\Controllers\API;


use App\Http\Resources\Unit\UnitCollection;
use App\Http\Resources\Unit\UnitResource;
use App\Models\Language;
use App\Repositories\Contracts\UnitRepositoryInterface;
use Illuminate\Http\Request;

class UnitController extends Controller
{
    public function index(
        Request $request,
        UnitRepositoryInterface $unitRepository
    ) {
        $name = $request->query('name');
        $locale = $request->header('Accept-Language');

        if(!$locale) {
            $locale = Language::DEFAULT;
        }

        if($name && $locale){
            return new UnitCollection(
                $unitRepository
                    ->getByTranslationNameLike($name, $locale)
                    ->paginate()
            );
        }else {
            return new UnitCollection($unitRepository->paginate());
        }
    }

    public function show(
        Request $request,
        UnitRepositoryInterface $unitRepository
    ) {
        $id = $request->route('id');

        return (new UnitResource($unitRepository->find($id)));
    }
}
