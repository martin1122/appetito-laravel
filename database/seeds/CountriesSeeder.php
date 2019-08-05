<?php

use App\Services\Country\Contracts\CountryService;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Storage;

class CountriesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $file = Storage::disk('local')->get('data/countries.json');
        $countries = json_decode($file, true);

        app(CountryService::class)->storeAll($countries);
    }
}
