@extends('dashboard.administrator.master')

@section('content')
    <div class="container-fluid" id="app">
        <div class="row">
            <div class="col-md-12">
                <div class="bgc-white bd bdrs-3 p-20 mB-20">
                    @include('dashboard.blocks.errors', [ 'errors' => $errors ])
                    <form action="{{ route('dashboard.collections.store') }}" method="post" enctype="multipart/form-data">
                        @csrf

                        <div class="row">
                            <div class="col-md-6">
                                @component('dashboard.blocks.forms.basic', [
                                        'label' => 'Title',
                                        'inputClass' => 'form-control',
                                        'id' => 'name',
                                        'name' => 'name[uz]',
                                        'type' => 'text',
                                    'placeholder' => '',
                                    'required' => true
                                    ]) @endcomponent
                                    <translatable-component translatable="name" type="text" visible="true"></translatable-component>
                            </div>

                            <div class="col-md-8">
                                @component('dashboard.blocks.forms.textarea', [
                                    'label'         => 'Description',
                                    'className'     => '',
                                    'id'            => 'description',
                                    'name'          => 'description[uz]',
                                    'rows'          =>  5,
                                    'placeholder'   => 'description about collection...'
                                ]) @endcomponent
                                <translatable-component translatable="description" type="textarea" visible="true"></translatable-component>
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
