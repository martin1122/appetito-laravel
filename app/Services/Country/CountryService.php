<?php
/**
 * Created by PhpStorm.
 * User: dev001
 * Date: 11/30/18
 * Time: 1:49 PM
 */

namespace App\Services\Country;

use App\Repositories\Contracts\CountryRepositoryInterface;
use App\Services\Country\Contracts\CountryService as CountryServiceInterface;


class CountryService implements CountryServiceInterface
{
    /**
     * @var
     */
    private $country;

    public function __construct(CountryRepositoryInterface $countryRepository)
    {
        $this->country = $countryRepository;
    }

    /**
     * @param array $data
     *
     * @return mixed
     */
    public function storeAll(array $data)
    {
        $alphaCodes = array_keys($data);

        foreach ($alphaCodes as $alphaCode) {
            $this->country->firstOrCreate([
                'name' => array_get($data, sprintf('%s.name', $alphaCode)),
                'native_name' => array_get($data, sprintf('%s.native', $alphaCode)),
                'alpha_code2' => $alphaCode
            ]);
        }

        return true;
    }
}
