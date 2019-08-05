@extends('dashboard.administrator.master')

@section('content')
    <div class="container-fluid" id="app">
        <div class="row">
            <div class="col-md-12">
                <div class="bgc-white bd bdrs-3 p-20 mB-20">
                    @include('dashboard.blocks.errors', [ 'errors' => $errors ])
                    <form action="{{ route('dashboard.ingredients.store') }}" method="post" enctype="multipart/form-data">
                        @csrf

                        <div class="row">
                            <div class="col-md-6">
                                @component('dashboard.blocks.forms.basic', [
                                        'label' => 'Name',
                                        'inputClass' => 'form-control',
                                        'id' => 'name',
                                        'name' => 'name[uz]',
                                        'type' => 'text',
                                    'placeholder' => 'for example, kartoshka',
                                    'required' => true
                                    ]) @endcomponent
                                    <translatable-component translatable="name" type="text"></translatable-component>
                            </div>
                            <div class="col-md-3">
                                @component('dashboard.blocks.forms.select', [
                                        'label' => 'Preferred Unit',
                                        'inputClass' => 'form-control',
                                        'id' => 'unit_id',
                                        'name' => 'unit_id',
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
