
@extends('dashboard.administrator.master')

@section('content')
    <div class="container-fluid" id="app">
        <div class="row">
            <div class="col-md-12">
                <div class="bgc-white bd bdrs-3 p-20 mB-20">
                    @include('dashboard.blocks.errors', $errors->all())
                    <form action="{{ route('dashboard.recipes.store') }}" method="post" enctype="multipart/form-data">
                        @csrf

                        <div class="row">
                            <div class="col-md-8">
                                @component('dashboard.blocks.forms.basic', [
                                        'label' => 'Name',
                                        'inputClass' => 'form-control',
                                        'id' => 'name',
                                        'name' => 'name[uz]',
                                        'type' => 'text',
                                    'placeholder' => 'name for your recipe...',
                                    'required' => true
                                    ]) @endcomponent
                                <translatable-component translatable="name" type="text"></translatable-component>
                            </div>
                            <div class="col-md-2 d-flex align-items-center">
                                @component('dashboard.blocks.forms.checkbox',[
                                    'inputClass' => 'peer',
                                    'labelClass' => 'peers peer-greed js-sb ai-c',
                                    'label' => 'Active',
                                    'id' => 'isActive',
                                    'type' => 'checkbox',
                                    'name' => 'is_active',
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
                                ]) @endcomponent
                            </div>
                            <div class="col-md-8">
                                @component('dashboard.blocks.forms.textarea', [
                                    'label'         => 'Description',
                                    'className'     => '',
                                    'id'            => 'description',
                                    'name'          => 'description[uz]',
                                    'rows'          =>  5,
                                    'placeholder'   => 'description about your recipe...'
                                ]) @endcomponent
                                <translatable-component translatable="description" type="textarea"></translatable-component>
                            </div>
                            <div class="col-md-4">
                                @component('dashboard.blocks.forms.select', [
                                    'mainClass'     => '',
                                    'label'         => 'Difficulty',
                                    'id'            => 'difficulty',
                                    'name'          => 'difficulty_id',
                                    'options' => [
                                        [
                                            'text'  => 'easy',
                                            'value' => 1,
                                            'selected' => true
                                        ],
                                        [
                                            'text'  => 'medium',
                                            'value' => 2,
                                            'selected' => false
                                        ],
                                        [
                                            'text'  => 'hard',
                                            'value' => 3,
                                            'selected' => false
                                        ],
                                        [
                                            'text'  => 'professional',
                                            'value' => 4,
                                            'selected' => false
                                        ],
                                    ]
                                ]) @endcomponent
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
                                                   label="Search and Add Nations">
                                </searchable-select>
                            </div>
                            <div class="col-md-6">
                                @component('dashboard.blocks.forms.basic', [
                                    'label' => 'Preparation time',
                                    'inputClass' => 'form-control',
                                    'id' => 'prepTime',
                                    'name' => 'details[preparation_time]',
                                    'type' => 'number'
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
                                    'step' => '0.01'
                                ]) @endcomponent
                            </div>
                            <div class="col-md-3">
                                @component('dashboard.blocks.forms.basic',[
                                    'label' => 'Carbs',
                                    'inputClass' => 'form-control',
                                    'id' => 'carbs',
                                    'name' => 'details[carbs]',
                                    'type' => 'number',
                                    'step' => '0.01'
                                ]) @endcomponent
                            </div>
                            <div class="col-md-3">
                                @component('dashboard.blocks.forms.basic',[
                                    'label' => 'Protein',
                                    'inputClass' => 'form-control',
                                    'id' => 'protein',
                                    'name' => 'details[protein]',
                                    'type' => 'number',
                                    'step' => '0.01'
                                ]) @endcomponent
                            </div>
                            <div class="col-md-3">
                                @component('dashboard.blocks.forms.basic', [
                                    'label' => 'Calorie',
                                    'inputClass' => 'form-control',
                                    'id' => 'calorie',
                                    'name' => 'details[calorie]',
                                    'type' => 'number',
                                    'step' => '0.01'
                                ]) @endcomponent
                            </div>
                        </div>

                        <hr>
                        <strong>Ingredients:</strong>
                        <hr>

                        <ingredients v-bind:ingredients="{{ $ingredients }}" v-bind:units="{{ $units }}"></ingredients>

                        <hr>
                        <strong>Directions:</strong>
                        <hr>

                        <directions></directions>

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
