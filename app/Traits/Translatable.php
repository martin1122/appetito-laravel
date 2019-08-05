<?php
/**
 * Created by PhpStorm.
 * User: dev001
 * Date: 11/30/18
 * Time: 6:40 PM
 */

namespace App\Traits;

use App\Models\Language;

trait Translatable
{

    /**
     * Get translations of a model
     *
     * @return mixed
     */
    public function translations()
    {
        return $this->hasMany($this->translationModel);
    }

    /**
     * Get translation of a model by field and language
     *
     * @param $field
     * @param $locale
     *
     * @return |null
     */
    public function translation($field, $locale)
    {
        $result = null;

        foreach ($this->translations as $translation){
            if($translation->language->short_name == $locale){
                $result = $translation->$field;
            }
        }

        return $result;
    }

    /**
     * Massive save translations
     *
     * @param array $data
     */
    public function saveTranslations(array $data)
    {
        $translations = [];

        $languages = [
            Language::UZBEK,
            Language::ENGLISH,
            Language::RUSSIAN
        ];

        foreach ($this->translatableFields as $field) {

            foreach ($languages as $language){
                array_set($translations,
                    "{$language}.{$field}",
                    array_get($data,
                        "{$field}.{$language}"
                    )
                );
            }
        }

        foreach ($languages as $shortName) {

            $language = Language::where('short_name', $shortName)->first();
            if($language){
                $data = $translations[$shortName];
                $data['lang_id'] = $language->id;

                $this->translations()->create($data);
            }
        }
    }

    /**
     * Massive update translations
     *
     * @param array $data
     */
    public function updateTranslations(array $data)
    {
        $translations = [];

        $languages = [
            Language::UZBEK,
            Language::ENGLISH,
            Language::RUSSIAN
        ];

        foreach ($this->translatableFields as $field) {

            foreach ($languages as $language){
                array_set($translations,
                    "{$language}.{$field}",
                    array_get($data,
                        "{$field}.{$language}"
                    )
                );
            }
        }

        foreach ($languages as $shortName) {

            $language = Language::where('short_name', $shortName)->first();
            if($language){
                $translation = $translations[$shortName];
                $this->translations()->where('lang_id', $language->id)->update($translation);
            }
        }
    }
}
