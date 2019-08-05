@extends('dashboard.administrator.master')

@section('content')
    <div class="container-fluid" id="app">
        <div class="row">
            <div class="col-md-12">
                <div class="bgc-white bd bdrs-3 p-20 mB-20">
                    <div class="d-flex justify-content-end">
                        <form action="{{ route('dashboard.collections.delete', $collection->id) }}" method="post">
                            @csrf
                            {{ method_field('DELETE') }}

                            @component('dashboard.blocks.forms.submit-button',[
                                'name' => 'delete',
                                'class' => 'btn-danger mt-4'
                            ]) @endcomponent
                        </form>
                    </div>
                    @include('dashboard.blocks.errors', [ 'errors' => $errors ])
                    <form action="{{ route('dashboard.collections.update', $collection->id) }}" method="post" enctype="multipart/form-data">
                        @csrf
                        @method('PUT')
                        <div class="row">
                            <div class="col-md-6">
                                @component('dashboard.blocks.forms.basic', [
                                        'label' => 'Title',
                                        'inputClass' => 'form-control',
                                        'id' => 'name',
                                        'name' => 'name[uz]',
                                        'type' => 'text',
                                        'value' => $collection->translation('name', \App\Models\Language::UZBEK),
                                        'required' => true
                                    ]) @endcomponent
                                <translatable-component translatable="name" type="text"
                                                        ru="{{ $collection->translation('name', \App\Models\Language::RUSSIAN) }}"
                                                        en="{{ $collection->translation('name', \App\Models\Language::ENGLISH) }}"></translatable-component>
                            </div>

                            <div class="col-md-8">
                                @component('dashboard.blocks.forms.textarea', [
                                    'label'         => 'Description',
                                    'className'     => '',
                                    'id'            => 'description',
                                    'name'          => 'description[uz]',
                                    'rows'          =>  5,
                                    'value'         => $collection->translation('description', \App\Models\Language::UZBEK)
                                ]) @endcomponent
                                <translatable-component translatable="description" type="textarea"
                                                        ru="{{ $collection->translation('description', \App\Models\Language::RUSSIAN) }}"
                                                        en="{{ $collection->translation('description', \App\Models\Language::ENGLISH) }}"></translatable-component>
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
                                <img src="{{ $collection->image ? asset("storage/".$collection->image->url) : "" }}" alt="">
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
        <hr>
        <recipe-collections collection-id="{{$collection->id}}"></recipe-collections>
    </div>
@endsection
