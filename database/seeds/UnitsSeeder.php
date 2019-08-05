<?php

use App\Services\Unit\Contracts\UnitService;
use Illuminate\Database\Seeder;

class UnitsSeeder extends Seeder
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
                'name' => 'pieces'
            ],
            [
                'name' => 'kilos'
            ],
            [
                'name' => 'gr.'
            ],
            [
                'name' => 'spoon(s)'
            ],
            [
                'name' => 'tea spoon'
            ]
        ];

        $unitService = app(UnitService::class);

        foreach ($data as $unit){
            $unitService->store($unit);
        }
    }
}
