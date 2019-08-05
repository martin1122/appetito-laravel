<?php
/**
 * Created by PhpStorm.
 * User: dev001
 * Date: 1/22/19
 * Time: 7:36 PM
 */

namespace Tests\Functional\Dashboard\Services;


use App\Models\Collection;
use App\Services\Collection\Contracts\CollectionService;
use Tests\TestCase;
use Tests\Traits\HandleMockData;

class CollectionServiceTest extends TestCase
{
    use HandleMockData;

    protected $service;

    public function setUp()
    {
        parent::setUp();

        $this->service = app(CollectionService::class);
    }

    public function testStoreSuccess()
    {
        $collection = $this->service->store(array_collapse([
            $this->getNameWithTranslations(),
            $this->getDescriptionWithTranslations()
        ]));
        $this->assertInstanceOf(
            Collection::class,
            $collection
        );

        return $collection->id;
    }

    /**
     * @depends testStoreSuccess
     */
    public function testUpdateSuccess($id)
    {
        $collectionUpdated = $this->service->update($id, array_collapse([
            $this->getNameWithTranslations(),
            $this->getDescriptionWithTranslations()
        ]));

        $this->assertInstanceOf(
            Collection::class,
                $collectionUpdated
        );

        return $collectionUpdated->id;
    }

    /**
     * @depends testUpdateSuccess
     */
    public function testDeleteSuccess($id)
    {
        $this->assertTrue($this->service->delete($id));
        $this->assertNull(Collection::find($id));
    }
}
