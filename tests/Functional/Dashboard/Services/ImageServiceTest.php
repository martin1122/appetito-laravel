<?php
/**
 * Created by PhpStorm.
 * User: dev001
 * Date: 1/24/19
 * Time: 12:52 PM
 */

namespace Tests\Functional\Dashboard\Services;


use App\Models\Collection;
use App\Models\Image;
use App\Services\Media\Contracts\ImageService;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Tests\Functional\TestCase;
use Tests\Traits\HandleMockData;

class ImageServiceTest extends TestCase
{
    use HandleMockData;

    private $imageService;

    private static $collectionHash;

    public static function setUpBeforeClass()
    {
        parent::setUpBeforeClass();
        self::$collectionHash = str_random();
    }

    public function setUp()
    {
        parent::setUp();
        $this->imageService = app(ImageService::class);
    }

    public function testStore()
    {
        $uploadedImage = UploadedFile::fake()->image('collection.png')->size(100);
        $image = $this->imageService->store(
            $uploadedImage,
            Collection::class,
            self::$collectionHash
        );

        $this->assertInstanceOf(Image::class, $image);
        $this->seeInDatabase('images', [
            'id'    => $image->id,
            'slug'  => $image->slug,
            'url'   => $image->url,
            'thumbnail' => $image->thumbnail,
            'media_type' => 'png'
        ]);
        $this->assertTrue(Storage::exists($image->url));
        $this->assertTrue(Storage::exists($image->thumbnail));

        return $image;
    }

    /**
     * @depends testStore
     */
    public function testUpdate($image)
    {
        $uploadedImage = UploadedFile::fake()->image('collection2.png')->size(150);
        $image = $this->imageService->update(
            $image->id,
            $uploadedImage,
            Collection::class,
            self::$collectionHash
        );

        $this->assertInstanceOf(Image::class, $image);
        $this->seeInDatabase('images', [
            'id'    => $image->id,
            'slug'  => $image->slug,
            'url'   => $image->url,
            'thumbnail' => $image->thumbnail,
            'media_type' => 'png'
        ]);
        $this->assertTrue(Storage::exists($image->url));
        $this->assertTrue(Storage::exists($image->thumbnail));
    }

    /**
     * @depends testStore
     */
    public function testDelete($image)
    {
        $imageData = [
            'id'    => $image->id,
            'slug'  => $image->slug,
            'url'   => $image->url,
            'thumbnail' => $image->thumbnail,
            'media_type' => 'png'
        ];

        $this->assertTrue($this->imageService->delete($image->id));

        $this->dontSeeInDatabase('images', $imageData);
        $this->assertFalse(Storage::exists($image->url));
        $this->assertFalse(Storage::exists($image->thumbnail));
    }
}
