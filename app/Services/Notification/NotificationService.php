<?php


namespace App\Services\Notification;

use App\Models\Direction;
use App\Models\Notification;
use App\Services\Media\Contracts\ImageService;
use App\Services\Notification\Contracts\NotificationService as NotificationServiceInterface;

class NotificationService implements NotificationServiceInterface
{

    private $imageService;

    public function __construct(ImageService $imageService)
    {
        $this->imageService = $imageService;
    }

    public function store(array $data)
    {
        $notification = Notification::create();

        $image = $this->imageService->store(array_get($data, 'image'), Notification::class, $notification->id);
        if ($image) {
            $notification->image_id =  $image->id;
        }
        $notification->save();

        /*Saving translations*/
        $notification->saveTranslations($data);

        return $notification;
    }
}