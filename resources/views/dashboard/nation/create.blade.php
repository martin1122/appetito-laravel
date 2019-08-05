@extends('dashboard.administrator.master')

@section('content')
    <div class="container-fluid" id="app">
        <div class="row">
            <div class="col-md-12">
                <div class="bgc-white bd bdrs-3 p-20 mB-20">
                    <form action="{{ route('dashboard.nations.store') }}" method="post" enctype="multipart/form-data">
                        @csrf

                        <div class="row">
                            <div class="col-md-6">
                                @component('dashboard.blocks.forms.basic', [
                                        'label' => 'Name',
                                        'inputClass' => 'form-control',
                                        'id' => 'name',
                                        'name' => 'name[uz]',
                                        'type' => 'text',
                                    'placeholder' => 'for example, uzbek',
                                    'required' => true
                                    ]) @endcomponent
                                    <translatable-component translatable="name" type="text"></translatable-component>
                            </div>
                            <div class="col-md-6">
                                @component('dashboard.blocks.forms.basic', [
                                        'label' => 'Native Name',
                                        'inputClass' => 'form-control',
                                        'id' => 'nativeName',
                                        'name' => 'native_name',
                                        'type' => 'text',
                                    'placeholder' => 'for example,  o`zbek',
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
