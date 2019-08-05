<?php

namespace App\Services\API\Media\TemplateMethod;

class FullImageProcessor extends ImageProcessor
{
    /**
     * Base directory for group of images
     */
    const BASE_DIRECTORY = 'images';

    /**
     * Should thumbnails be generated
     *
     * @var bool
     */
    protected $hasThumbnail = true;

    /**
     * Thumbnail sizes
     *
     * @var array
     */
    protected $thumbnailSizes = [
        'tiny' => [
            'width' => 75,
            'height' => 50
        ],
        'medium' => [
            'width' => 300,
            'height' => 200
        ]
    ];

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
