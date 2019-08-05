@extends('dashboard.administrator.master')

@section('content')
    <div class="container-fluid" id="app">
        <div class="row">
            <div class="col-md-12">
                <div class="bgc-white bd bdrs-3 p-20 mB-20">
                    <div class="d-flex justify-content-end">
                        <form action="{{ route('dashboard.nations.delete', $nation->id) }}" method="post">
                            @csrf
                            {{ method_field('DELETE') }}

                            @component('dashboard.blocks.forms.submit-button',[
                                'name' => 'delete',
                                'class' => 'btn-danger mt-4'
                            ]) @endcomponent
                        </form>
                    </div>
                    <form action="{{ route('dashboard.nations.update', $nation->id) }}" method="post" enctype="multipart/form-data">
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
                                        'value' => $nation->translation('name', \App\Models\Language::UZBEK),
                                        'required' => true
                                    ]) @endcomponent
                                    <translatable-component translatable="name" type="text" visible="true"
                                                            ru="{{ $nation->translation('name', \App\Models\Language::RUSSIAN) }}"
                                                            en="{{ $nation->translation('name', \App\Models\Language::ENGLISH) }}">
                                    </translatable-component>
                            </div>
                            <div class="col-md-6">
                                @component('dashboard.blocks.forms.basic', [
                                        'label' => 'Native Name',
                                        'inputClass' => 'form-control',
                                        'id' => 'nativeName',
                                        'name' => 'native_name',
                                        'type' => 'text',
                                        'value' => $nation->native_name,
                                    ]) @endcomponent
                            </div>
                        </div>

                        @component('dashboard.blocks.forms.submit-button',[
                                    'name' => 'update',
                                    'class' => 'btn-primary mt-4'
                                ]) @endcomponent
                    </form>
                </div>
            </div>
        </div>
    </div>
@endsection
