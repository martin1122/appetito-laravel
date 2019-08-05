<?php

use App\Models\Difficulty;
use Illuminate\Database\Seeder;

class DifficultiesTablesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $difficulties = [
            [
                'id' => Difficulty::ID_EASY,
                'level' => Difficulty::LEVEL_EASY
            ],
            [
                'id' => Difficulty::ID_MEDIUM,
                'level' => Difficulty::LEVEL_MEDIUM
            ],
            [
                'id' => Difficulty::ID_HARD,
                'level' => Difficulty::LEVEL_HARD
            ],
            [
                'id' => Difficulty::ID_PROFESSIONAL,
                'level' => Difficulty::LEVEL_PROFESSIONAL
            ]
        ];

        foreach ($difficulties as $difficulty){
            Difficulty::firstOrCreate($difficulty);
        }
    }
}
