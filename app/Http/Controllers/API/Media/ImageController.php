<?php

namespace App\Http\Controllers\API\Media;

use App\Http\Controllers\API\Controller;
use App\Http\Requests\StoreImageRequest;
use App\Http\Resources\Image\ImageResource;
use App\Services\API\Media\TemplateMethod\FullImageProcessor;
use App\Services\Media\Contracts\ImageService;

class ImageController extends Controller
{
    private $imageService;

    public function __construct(ImageService $imageService)
    {
        $this->imageService = $imageService;
    }

    public function store(StoreImageRequest $request, FullImageProcessor $imageProcessor)
    {
        $image = $imageProcessor->store(
            $request->file('image')
        );

        return new ImageResource($image, true);
    }

    public function delete(int $id)
    {
        $this->imageService->delete($id);

        return true;
    }
}
