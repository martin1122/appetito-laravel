<?php

use App\Services\Nation\Contracts\NationService;
use Illuminate\Database\Seeder;

class NationsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $data = [
            [
                'native_name' => 'o`zbek',
                'name' => [
                    'uz' => 'o`zbek',
                    'ru' => 'uzbek',
                    'en' => 'uzbek'
                ]
            ],
            [
                'native_name' => 'African',
                'name' => [
                    'uz' => 'African',
                    'ru' => 'African',
                    'en' => 'African'
                ]
            ],
            [
                'native_name' => 'Creole',
                'name' => [
                    'uz' => 'Creole',
                    'ru' => 'Creole',
                    'en' => 'Creole'
                ]
            ],
            [
                'native_name' => 'Baya',
                'name' => [
                    'uz' => 'Baya',
                    'ru' => 'Baya',
                    'en' => 'Baya'
                ]
            ],
            [
                'native_name' => 'Mandjia',
                'name' => [
                    'uz' => 'Mandjia',
                    'ru' => 'Mandjia',
                    'en' => 'Mandjia'
                ]
            ],
            [
                'native_name' => 'Voltaiques',
                'name' => [
                    'uz' => 'Voltaiques',
                    'ru' => 'Voltaiques',
                    'en' => 'Voltaiques'
                ]
            ],
            [
                'native_name' => 'Austronesian',
                'name' => [
                    'uz' => 'Austronesian',
                    'ru' => 'Austronesian',
                    'en' => 'Austronesian'
                ]
            ],
            [
                'native_name' => 'Oromo',
                'name' => [
                    'uz' => 'Oromo',
                    'ru' => 'Oromo',
                    'en' => 'Oromo'
                ]
            ],
            [
                'native_name' => 'Georgian',
                'name' => [
                    'uz' => 'Georgian',
                    'ru' => 'Georgian',
                    'en' => 'Georgian'
                ]
            ],
            [
                'native_name' => 'Amerindian',
                'name' => [
                    'uz' => 'Amerindian',
                    'ru' => 'Amerindian',
                    'en' => 'Amerindian'
                ]
            ],
            [
                'native_name' => 'Tajik',
                'name' => [
                    'uz' => 'Tajik',
                    'ru' => 'Tajik',
                    'en' => 'Tajik'
                ]
            ],
        ];

        $nationService = app(NationService::class);

        foreach ($data as $nation){
            $nationService->store($nation);
        }
    }
}
