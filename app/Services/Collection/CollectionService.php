<?php
/**
 * Created by PhpStorm.
 * User: dev001
 * Date: 1/2/19
 * Time: 7:55 PM
 */

namespace App\Services\Collection;

use App\Helpers\FileHelper;
use App\Models\Collection;
use App\Repositories\Contracts\CollectionRepositoryInterface;
use App\Services\Collection\Contracts\CollectionService as CollectionServiceInterface;
use App\Services\Media\Contracts\ImageService;

class CollectionService implements CollectionServiceInterface
{

    private $collectionRepository;

    private $imageService;

    private $fileHelper;

    public function __construct(
        CollectionRepositoryInterface $collectionRepository,
        ImageService $imageService,
        FileHelper $fileHelper
    ) {
        $this->collectionRepository = $collectionRepository;
        $this->imageService = $imageService;
        $this->fileHelper = $fileHelper;
    }

    /**
     * @param array $data
     *
     * @return mixed
     */
    public function store(array $data)
    {
        $collection = $this->collectionRepository->create([]);
        $image = $this->imageService->store(array_get($data, 'image'), Collection::class, $collection->id);

        if($image){
            $collection->image_id = $image->id;
        }

        $collection->save();
        $collection->saveTranslations(array_only($data, ['name', 'description']));

        return $collection;
    }

    /**
     * @param       $id
     * @param array $data
     *
     * @return mixed
     */
    public function update($id, array $data)
    {
        $collection = $this->collectionRepository->with([
            'image',
            'translations'
        ])->find($id);

        if($collection->image){
            $image = $this->imageService->update(
                $collection->image->id,
                array_get($data, 'image'),
                Collection::class, $collection->id
            );
        }else{
            $image = $this->imageService->store(
                array_get($data, 'image'),
                Collection::class, $collection->id
            );
        }

        if($image){
            $collection->image_id = $image->id;
        }

        $collection->save();
        $collection->updateTranslations(array_only($data, ['name', 'description']));

        return $collection;
    }

    /**
     * @param $id
     *
     * @return mixed
     */
    public function delete($id)
    {
        $collection = $this->collectionRepository->with([
            'image',
            'translations'
        ])->find($id);

        $image = $collection->image;
        $directory = sprintf(Collection::FILES_DIR, $collection->id);
        $collection->delete($id);

        if($image){
            $this->imageService->delete($image->id);
        }

        $this->fileHelper->deleteDirectory($directory);

        return true;
    }
}
