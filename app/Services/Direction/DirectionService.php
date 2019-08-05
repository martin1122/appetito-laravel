<?php
/**
 * Created by PhpStorm.
 * User: dev001
 * Date: 1/11/19
 * Time: 7:16 PM
 */

namespace App\Services\Direction;

use App\Helpers\FileHelper;
use App\Models\Direction;
use App\Repositories\Contracts\DirectionRepositoryInterface;
use App\Services\Direction\Contracts\DirectionService as DirectionServiceInterface;
use App\Services\Media\Contracts\ImageService;


class DirectionService implements DirectionServiceInterface
{

    private $imageService;

    private $directionRepository;

    private $fileHelper;

    public function __construct(
        ImageService $imageService,
        DirectionRepositoryInterface $directionRepository,
        FileHelper $fileHelper
    ) {
        $this->imageService = $imageService;
        $this->directionRepository = $directionRepository;
        $this->fileHelper = $fileHelper;
    }

    public function store(array $data)
    {
        $direction = $this->directionRepository->create(
            array_only($data, [
                'order',
                'recipe_id',
                'image_id',
                'body'
            ])
        );

        return $direction;
    }

    /**
     * @param       $id
     * @param array $data
     *
     * @return mixed
     */
    public function update($id, array $data)
    {
        //
    }

    /**
     * @param $id
     *
     * @return mixed
     */
    public function delete($id)
    {
        //
    }
}
