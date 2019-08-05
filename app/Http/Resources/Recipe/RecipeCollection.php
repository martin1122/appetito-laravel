<?php
/**
 * Created by PhpStorm.
 * User: dev001
 * Date: 2/21/19
 * Time: 2:24 PM
 */

namespace App\Http\Resources\Recipe;

use Illuminate\Http\Resources\Json\ResourceCollection;
use Illuminate\Http\Response;

class RecipeCollection extends ResourceCollection
{
    public $collects = RecipeResource::class;

    private $withWrapper = false;

    public static $wrap = 'payload';

    public function __construct($resource, $withWrapper)
    {
        parent::__construct($resource);
        $this->withWrapper = $withWrapper;
    }

    public function toArray($request)
    {
        if ($this->withWrapper) {
            return [
                'message' => __('api.common.success'),
                'code' => Response::HTTP_OK,
                'payload' => $this->collection
            ];
        } else {
            return $this->collection;
        }
    }
}
