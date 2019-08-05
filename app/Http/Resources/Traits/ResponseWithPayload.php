<?php

namespace App\Http\Resources\Traits;

use Illuminate\Http\Response;

trait ResponseWithPayload
{
    private $inPayload = false;

    public function __construct($resource, $inPayload)
    {
        parent::__construct($resource);
        $this->inPayload = $inPayload;
    }

    public function toArray($request)
    {
        if ($this->inPayload === true) {

            return [
                'message' => __('api.common.success'),
                'code' => Response::HTTP_OK,
                'payload' => $this->getPayload()
            ];
        } else {
            return $this->getPayload();
        }
    }
}