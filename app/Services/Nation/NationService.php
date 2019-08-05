<?php
/**
 * Created by PhpStorm.
 * User: dev001
 * Date: 12/12/18
 * Time: 5:40 PM
 */

namespace App\Services\Nation;

use App\Models\Language;
use App\Models\Nation;
use App\Services\Nation\Contracts\NationService as NationServiceInterface;

class NationService implements NationServiceInterface
{

    /**
     * @param array $data
     *
     * @return mixed
     */
    public function store(array $data)
    {
        $nation = Nation::firstOrCreate([
            'native_name' => $data['native_name']
        ]);

        $translations = array_get($data, 'name');

        foreach (array_keys($translations) as $shortName) {
            $language = Language::where('short_name', $shortName)->first();
            if($language){
                $nation->translations()->create([
                    'name' => $translations[$language->short_name],
                    'lang_id' => $language->id
                ]);
            }
        }
    }

    /**
     * @param       $id
     * @param array $data
     *
     * @return mixed
     */
    public function update($id, array $data)
    {
        $nation = Nation::find($id);

        if(isset($nation)){
            $nation->native_name = $data['native_name'];
            $nation->save();
        }else{
            return false;
        }

        $translations = array_get($data, 'name');

        foreach (array_keys($translations) as $shortName) {
            $language = Language::where('short_name', $shortName)->first();
            if($language){
                $nation->translations()->updateOrCreate([
                    'name' => $translations[$language->short_name],
                    'lang_id' => $language->id
                ]);
            }
        }

        return true;
    }
}
