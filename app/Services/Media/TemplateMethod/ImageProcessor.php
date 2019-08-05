<?php

namespace App\Services\API\Media\TemplateMethod;

use App\Helpers\FileHelper;
use App\Repositories\Contracts\ImageRepositoryInterface;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\ImageManager;

/**
 * @method getMainDirectory()
 * @property  $hasThumbnail
 * @property  $hasWebp
 * @property  $thumbnailSizes
 */
abstract class ImageProcessor
{
    /**
     * @var FileHelper
     */
    protected $fileHelper;

    /**
     * @var ImageManager
     */
    protected $imageManager;

    /**
     * @var ImageRepositoryInterface
     */
    protected $imageRepository;

    /**
     * @var string
     */
    protected $originalImagePath;

    /**
     * Image type
     *
     * @var string
     */
    protected $type;

    public function __construct(
        FileHelper $fileHelper,
        ImageManager $imageManager,
        ImageRepositoryInterface $imageRepository
    ){
        $this->fileHelper = $fileHelper;
        $this->imageManager = $imageManager;
        $this->imageRepository = $imageRepository;
    }

    protected function makeThumbnails()
    {
        $paths = [];

        foreach ($this->thumbnailSizes as $key => $value)
        {
            $hash = uniqid();
            $thumbnailFileName = "{$hash}.{$this->type}";
            $paths[$key] = "{$this->getMainDirectory()}/{$key}/{$thumbnailFileName}";

            $thumbnailImage = $this->imageManager
                ->make(public_path("storage/{$this->originalImagePath}"))
                ->resize($value['width'], $value['height']);
            $saveDir = "{$this->getMainDirectory()}/{$key}";
            $savePath = storage_path("app/public/{$paths[$key]}");

            if (!Storage::exists($saveDir)) {
                Storage::makeDirectory($saveDir);
            }

            $thumbnailImage->save($savePath);
        }

        return $paths;
    }

    protected function convertToWebp()
    {
        $hash = uniqid();
        $webpFileName = "{$hash}.webp";
        $path = "{$this->getMainDirectory()}/webp/{$webpFileName}";
        $convertedImage = $this->imageManager
            ->make(public_path("storage/{$this->originalImagePath}"))
            ->encode('webp');
        $saveDir = "{$this->getMainDirectory()}/webp";
        $savePath = storage_path("app/public/$path");

        if (!Storage::exists($saveDir)) {
            Storage::makeDirectory($saveDir);
        }

        $convertedImage->save($savePath);

        return $path;
    }

    public function store($image)
    {
        $this->type = $image->getClientOriginalExtension();
        $this->originalImagePath = $this->upload($image);

        $thumbnailPaths = [];
        $webpPath = null;

        if ($this->hasThumbnail) {
            $thumbnailPaths = $this->makeThumbnails();
        }

        if ($this->hasWebp) {
            $webpPath = $this->convertToWebp();
        }

        $img = $this->imageRepository->create([
            'original'  => $this->originalImagePath,
            'tiny' => Arr::get($thumbnailPaths, 'tiny'),
            'medium' => Arr::get($thumbnailPaths, 'medium'),
            'webp' => $webpPath,
            'expire' => time() + 86400
        ]);

        return $img;
    }

    private function upload($image)
    {
        return $this->fileHelper->upload($image, $this->getMainDirectory() . "/original");
    }
}
