<?php
/**
 * Created by PhpStorm.
 * User: dev001
 * Date: 1/23/19
 * Time: 7:37 PM
 */

namespace Tests\Traits;


use Illuminate\Http\UploadedFile;

trait HandleMockData
{

    public function getTranslations($length = 50)
    {
        return [
            'uz' => str_random($length),
            'en' => str_random($length),
            'ru' => str_random($length),
        ];
    }

    public function getNameWithTranslations()
    {
        return [
            'name' => [
                'uz' => $this->getTextValue(),
                'en' => $this->getTextValue(),
                'ru' => $this->getTextValue(),
            ]
        ];
    }

    public function getDescriptionWithTranslations()
    {
        return [
            'description' => [
                'uz' => $this->getTextAreaValue(),
                'en' => $this->getTextAreaValue(),
                'ru' => $this->getTextAreaValue(),
            ]
        ];
    }

    public function getTextValue($length = 25)
    {
        return str_random($length);
    }

    public function getTextAreaValue($length = 100)
    {
        return str_random($length);
    }

    public function getImage($name = null)
    {
        return base_path("tests/data/images/{$name}");
    }

    public function getUploadImage($fileName = 'image.png')
    {
        return UploadedFile::fake()->image($fileName);
    }
}
