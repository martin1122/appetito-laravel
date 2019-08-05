<?php
/**
 * Created by PhpStorm.
 * User: dev001
 * Date: 1/2/19
 * Time: 8:19 PM
 */

namespace App\Services\Media;

use App\Helpers\FileHelper;
use App\Repositories\Contracts\ImageRepositoryInterface;
use App\Services\Media\Contracts\ImageService as ImageServiceInterface;

class ImageService implements ImageServiceInterface
{
    private $imageRepository;

    private $fileHelper;

    public function __construct(
        ImageRepositoryInterface $imageRepository,
        FileHelper $fileHelper
    ){
        $this->imageRepository = $imageRepository;
        $this->fileHelper = $fileHelper;
    }

    public function delete(int $id)
    {
        $image = $this->imageRepository->find($id);

        if ($image->original) {
            $this->fileHelper->delete($image->original);
        }

        if ($image->webp) {
            $this->fileHelper->delete($image->webp);
        }

        if ($image->medium) {
            $this->fileHelper->delete($image->medium);
        }

        if ($image->tiny) {
            $this->fileHelper->delete($image->tiny);
        }

        return $image->delete();
    }
}
