<?php

namespace App\Services\Media\TemplateMethod;

use App\Services\API\Media\TemplateMethod\ImageProcessor;

class OnlyWebpImageProcessor extends ImageProcessor
{
    /**
     * Base directory for group of images
     */
    const BASE_DIRECTORY = 'posts';

    /**
     * Should thumbnails be generated
     *
     * @var bool
     */
    protected $hasThumbnail = false;

    /**
     * Does have webp copy?
     *
     * @var bool
     */
    protected $hasWebp = true;

    /**
     * Get main directory
     *
     * @return string
     */
    protected function getMainDirectory()
    {
        return self::BASE_DIRECTORY . "/" . date('Ymd');
    }
}
