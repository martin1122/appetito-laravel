<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        DB::statement("SET foreign_key_checks = 0");
        $tableNames = DB::select('SHOW TABLES');

        foreach ($tableNames as $table) {
            //if you don't want to truncate migrations
            if ($table->{"Tables_in_".env('DB_DATABASE')} == 'migrations') {
                continue;
            }
            DB::table($table->{"Tables_in_".env('DB_DATABASE')})->truncate();
        }

        $this->call(CountriesSeeder::class);
        $this->call(LanguagesSeeder::class);
        $this->call(UnitsSeeder::class);
        //$this->call(DifficultiesTablesSeeder::class);
        $this->call(RolesTableSeeder::class);
        $this->call(UsersTableSeeder::class);
        //$this->call(NationsSeeder::class);
        $this->call(IngredientsSeeder::class);
        //$this->call(RecipesTableSeeder::class);
        $this->call(CategorySeeder::class);
        DB::statement("SET foreign_key_checks = 1");
    }
}
