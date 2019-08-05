@extends('dashboard.administrator.master')

@section('content')
    <div class="container-fluid" id="app">
        <div class="row">
            <div class="col-md-12">
                <div class="bgc-white bd bdrs-3 p-20 mB-20">
                    <div class="d-flex justify-content-end">
                        <form action="{{ route('dashboard.ingredients.delete', $ingredient->id) }}" method="post">
                            @csrf
                            {{ method_field('DELETE') }}

                            @component('dashboard.blocks.forms.submit-button',[
                                'name' => 'delete',
                                'class' => 'btn-danger mt-4'
                            ]) @endcomponent
                        </form>
                    </div>
                    <form action="{{ route('dashboard.ingredients.update', $ingredient->id) }}" method="post" enctype="multipart/form-data">
                        @csrf
                        @method('PUT')
                        <div class="row">
                            <div class="col-md-6">
                                @component('dashboard.blocks.forms.basic', [
                                        'label' => 'Name',
                                        'inputClass' => 'form-control',
                                        'id' => 'name',
                                        'name' => 'name[uz]',
                                        'type' => 'text',
                                    'value' => $ingredient->translation('name', \App\Models\Language::UZBEK),
                                    'required' => true
                                    ]) @endcomponent
                                <translatable-component translatable="name" type="text"
                                                        ru="{{ $ingredient->translation('name', \App\Models\Language::RUSSIAN) }}"
                                                        en="{{ $ingredient->translation('name', \App\Models\Language::ENGLISH) }}">
                                </translatable-component>
                            </div>
                            <div class="col-md-3">
                                @component('dashboard.blocks.forms.select', [
                                        'label' => 'Preferred Unit',
                                        'inputClass' => 'form-control',
                                        'id' => 'unit_id',
                                        'name' => 'unit_id',
                                        'type' => 'number',
                                        'step' => '0.01',
                                        'options' => $options
                                    ]) @endcomponent
                            </div>
                            <div class="col-md-3">
                                @component('dashboard.blocks.forms.basic', [
                                        'label' => 'Price',
                                        'inputClass' => 'form-control',
                                        'id' => 'price',
                                        'name' => 'price',
                                        'type' => 'number',
                                        'step' => '0.01',
                                    ]) @endcomponent
                            </div>
                        </div>
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
