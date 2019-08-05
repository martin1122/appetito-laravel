<?php

use App\Models\Language;
use Illuminate\Database\Seeder;

class LanguagesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $languages = [
            [
                'id' => Language::ID_UZBEK,
                'long_name' => 'o‘zbek',
                'short_name' => 'uz'
            ],
            [
                'id' => Language::ID_ENGLISH,
                'long_name' => 'english',
                'short_name' => 'en'
            ],
            [
                'id' => Language::ID_RUSSIAN,
                'long_name' => 'русский',
                'short_name' => 'ru'
            ],
        ];

        foreach ($languages as $language){
            Language::firstOrCreate($language);
        }
    }
}
