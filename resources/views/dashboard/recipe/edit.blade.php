
@extends('dashboard.administrator.master')

@section('content')
    <div class="container-fluid" id="app">
        <div class="row">
            <div class="col-md-12">
                <div class="bgc-white bd bdrs-3 p-20 mB-20">
                    <div class="d-flex justify-content-end">
                        <form action="{{ route('dashboard.recipes.delete', $recipe->id) }}" method="post">
                            @csrf
                            {{ method_field('DELETE') }}

                            @component('dashboard.blocks.forms.submit-button',[
                                'name' => 'delete',
                                'class' => 'btn-danger mt-4'
                            ]) @endcomponent
                        </form>
                    </div>

                    @include('dashboard.blocks.errors', $errors->all())
                    <form action="{{ route('dashboard.recipes.update', $recipe->id) }}" method="post" enctype="multipart/form-data">
                        @csrf
                        @method('PUT')

                        <div class="row">
                            <div class="col-md-8">
                                @component('dashboard.blocks.forms.basic', [
                                        'label' => 'Name',
                                        'inputClass' => 'form-control',
                                        'id' => 'name',
                                        'name' => 'name[uz]',
                                        'type' => 'text',
                                    'value' => $recipe->translation('name', \App\Models\Language::UZBEK),
                                    'required' => true
                                    ]) @endcomponent
                                <translatable-component translatable="name" type="text"
                                                        ru="{{ $recipe->translation('name', \App\Models\Language::RUSSIAN) }}"
                                                        en="{{ $recipe->translation('name', \App\Models\Language::ENGLISH) }}">
                                </translatable-component>
                            </div>
                            <div class="col-md-2 d-flex align-items-center">
                                @component('dashboard.blocks.forms.checkbox',[
                                    'inputClass' => 'peer',
                                    'labelClass' => 'peers peer-greed js-sb ai-c',
                                    'label' => 'Active',
                                    'id' => 'isActive',
                                    'type' => 'checkbox',
                                    'name' => 'is_active',
                                    'checked' => $recipe->is_active
                                ]) @endcomponent
                            </div>
                            <div class="col-md-2 d-flex align-items-center">
                                @component('dashboard.blocks.forms.checkbox',[
                                    'inputClass' => 'peer',
                                    'labelClass' => 'peers peer-greed js-sb ai-c',
                                    'label' => 'Pinned',
                                    'id' => 'isPinned',
                                    'type' => 'checkbox',
                                    'name' => 'is_pinned',
                                    'checked' => $recipe->is_pinned
                                ]) @endcomponent
                            </div>
                            <div class="col-md-8">
                                @component('dashboard.blocks.forms.textarea', [
                                    'label'         => 'Description',
                                    'className'     => '',
                                    'id'            => 'description',
                                    'name'          => 'description[uz]',
                                    'rows'          =>  5,
                                    'value'         => $recipe->translation('description', \App\Models\Language::UZBEK)
                                ]) @endcomponent
                                <translatable-component translatable="description" type="textarea"
                                                        ru="{{ $recipe->translation('description', \App\Models\Language::RUSSIAN) }}"
                                                        en="{{ $recipe->translation('description', \App\Models\Language::ENGLISH) }}">
                                </translatable-component>
                            </div>
                            <div class="col-md-4">
                                @component('dashboard.blocks.forms.select', [
                                    'mainClass'     => '',
                                    'label'         => 'Difficulty',
                                    'id'            => 'difficulty',
                                    'name'          => 'difficulty_id',
                                    'options' => $options
                                ]) @endcomponent
                            </div>

                            <div class="col-md-6">
                                <img src="{{ $recipe->image ? asset("storage/".$recipe->image->thumbnail) : null }}"
                                     alt="{{"Recipe ".$recipe->hash}}"
                                     width="{{\App\Models\Recipe::THUMBNAIL_WIDTH}}"
                                     height="{{\App\Models\Recipe::THUMBNAIL_HEIGHT}}">
                            </div>

                            <div class="col-md-6">

                            </div>

                            <div class="col-md-6">
                                @component('dashboard.blocks.forms.basic', [
                                    'label' => 'Image',
                                    'inputClass' => 'form-control-file',
                                    'id' => 'image',
                                    'name' => 'image',
                                    'type' => 'file',
                                ]) @endcomponent
                            </div>

                            <div class="col-md-6">
                                @component('dashboard.blocks.forms.basic', [
                                    'label' => 'Video',
                                    'inputClass' => 'form-control-file',
                                    'id' => 'video',
                                    'name' => 'video',
                                    'type' => 'file',
                                ]) @endcomponent
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-6">
                                <searchable-select v-bind:items="{{ $nations }}"
                                                   name="nation"
                                                   label="Search and Add Nations"
                                                   value="{{$nation}}">
                                </searchable-select>
                            </div>
                            <div class="col-md-6">
                                @component('dashboard.blocks.forms.basic', [
                                    'label' => 'Preparation time',
                                    'inputClass' => 'form-control',
                                    'id' => 'prepTime',
                                    'name' => 'details[preparation_time]',
                                    'type' => 'number',
                                    'value' => $recipe->detail->preparation_time
                                ]) @endcomponent
                            </div>
                        </div>

                        <hr>
                        <strong>Details:</strong>
                        <hr>

                        <div class="row align-items-center">
                            <div class="col-md-3">
                                @component('dashboard.blocks.forms.basic', [
                                    'label' => 'Fat',
                                    'inputClass' => 'form-control',
                                    'id' => 'fat',
                                    'name' => 'details[fat]',
                                    'type' => 'number',
                                    'step' => '0.01',
                                    'value' => $recipe->detail->fat
                                ]) @endcomponent
                            </div>
                            <div class="col-md-3">
                                @component('dashboard.blocks.forms.basic',[
                                    'label' => 'Carbs',
                                    'inputClass' => 'form-control',
                                    'id' => 'carbs',
                                    'name' => 'details[carbs]',
                                    'type' => 'number',
                                    'step' => '0.01',
                                    'value' => $recipe->detail->carbs
                                ]) @endcomponent
                            </div>
                            <div class="col-md-3">
                                @component('dashboard.blocks.forms.basic',[
                                    'label' => 'Protein',
                                    'inputClass' => 'form-control',
                                    'id' => 'protein',
                                    'name' => 'details[protein]',
                                    'type' => 'number',
                                    'step' => '0.01',
                                    'value' => $recipe->detail->protein
                                ]) @endcomponent
                            </div>
                            <div class="col-md-3">
                                @component('dashboard.blocks.forms.basic', [
                                    'label' => 'Calorie',
                                    'inputClass' => 'form-control',
                                    'id' => 'calorie',
                                    'name' => 'details[calorie]',
                                    'type' => 'number',
                                    'step' => '0.01',
                                    'value' => $recipe->detail->calorie
                                ]) @endcomponent
                            </div>
                        </div>

                        <hr>
                        <strong>Ingredients:</strong>
                        <hr>

                        <ingredients v-bind:ingredients="{{ $ingredients }}"
                                     v-bind:units="{{ $units }}"
                                     v-bind:value="{{ $ingredient }}">
                        </ingredients>

                        <hr>
                        <strong>Directions:</strong>
                        <hr>

                        <directions v-bind:value="{{ $directions }}"></directions>

                        @component('dashboard.blocks.forms.submit-button',[
                            'name' => 'save',
                            'class' => 'btn-primary mt-4'
                        ]) @endcomponent

                    </form>
                </div>
            </div>
        </div>
    </div>
@endsection
