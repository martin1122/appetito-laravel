@extends('dashboard.administrator.master')

@section('content')
    <div class="container-fluid">
        @include('dashboard.blocks.errors', $errors->all())
        <form action="{{ route('dashboard.notifications.store') }}" method="post" enctype="multipart/form-data">
            @csrf
            <div class="bgc-white bd bdrs-3 p-20 mB-20">
                <div class="row">
                    <div class="col-md-4">
                        @component('dashboard.blocks.forms.basic', [
                            'label' => 'Name',
                            'inputClass' => 'form-control',
                            'id' => 'name',
                            'name' => 'title[uz]',
                            'type' => 'text',
                            'value' => $notification->translation('title', 'uz'),
                            'required' => true
                        ]) @endcomponent
                    </div>
                    <div class="col-md-4">
                        @component('dashboard.blocks.forms.basic', [
                            'label' => 'Name Ru',
                            'inputClass' => 'form-control',
                            'id' => 'name',
                            'name' => 'title[ru]',
                            'type' => 'text',
                            'value' => $notification->translation('title', 'ru'),
                            'required' => true
                        ]) @endcomponent
                    </div>
                    <div class="col-md-4">
                        @component('dashboard.blocks.forms.basic', [
                            'label' => 'Title En',
                            'inputClass' => 'form-control',
                            'id' => 'name',
                            'name' => 'title[en]',
                            'type' => 'text',
                            'value' => $notification->translation('title', 'en'),
                            'required' => true
                        ]) @endcomponent
                    </div>
                    <div class="col-md-4">
                        @component('dashboard.blocks.forms.textarea', [
                            'label'         => 'Description',
                            'className'     => '',
                            'id'            => 'bodyUz',
                            'name'          => 'body[uz]',
                            'rows'          =>  5,
                            'value'         => $notification->translation('body', 'uz'),
                        ]) @endcomponent
                    </div>
                    <div class="col-md-4">
                        @component('dashboard.blocks.forms.textarea', [
                            'label'         => 'Description Ru',
                            'className'     => '',
                            'id'            => 'bodyRu',
                            'name'          => 'body[ru]',
                            'rows'          =>  5,
                            'value'         => $notification->translation('body', 'ru'),
                        ]) @endcomponent
                    </div>
                    <div class="col-md-4">
                        @component('dashboard.blocks.forms.textarea', [
                            'label'         => 'Description En',
                            'className'     => '',
                            'id'            => 'bodyEn',
                            'name'          => 'body[en]',
                            'rows'          =>  5,
                            'value' => $notification->translation('body', 'en'),
                        ]) @endcomponent
                    </div>
                    <div class="col">
                        @component('dashboard.blocks.forms.submit-button',[
                            'name' => 'update',
                            'class' => 'btn-primary mt-4'
                        ]) @endcomponent
                    </div>
                </div>
            </div>
        </form>
    </div>
@endsection

@push('scripts')

@endpush
