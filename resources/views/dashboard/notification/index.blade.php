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
                            'placeholder' => 'Russian translation',
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
                            'placeholder' => 'English translation',
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
                            'placeholder' => 'for example, uzbek',
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
                            'placeholder'   => 'Content of a notification in uzbek'
                        ]) @endcomponent
                    </div>
                    <div class="col-md-4">
                        @component('dashboard.blocks.forms.textarea', [
                            'label'         => 'Description Ru',
                            'className'     => '',
                            'id'            => 'bodyRu',
                            'name'          => 'body[ru]',
                            'rows'          =>  5,
                            'placeholder'   => 'Content of a notification in russian'
                        ]) @endcomponent
                    </div>
                    <div class="col-md-4">
                        @component('dashboard.blocks.forms.textarea', [
                            'label'         => 'Description En',
                            'className'     => '',
                            'id'            => 'bodyEn',
                            'name'          => 'body[en]',
                            'rows'          =>  5,
                            'placeholder'   => 'Content of a notification in english'
                        ]) @endcomponent
                    </div>
                    <div class="col-md-8">
                        @component('dashboard.blocks.forms.basic', [
                            'label' => 'Image',
                            'inputClass' => 'form-control-file',
                            'id' => 'image',
                            'name' => 'image',
                            'type' => 'file',
                        ]) @endcomponent
                    </div>
                    <div class="col-md-4">
                        @component('dashboard.blocks.forms.submit-button',[
                            'name' => 'send',
                            'class' => 'btn-primary mt-4'
                        ]) @endcomponent
                    </div>
                    </div>
                </div>
            </form>
        <div class="row">
            <div class="col-md-12">
                <div class="bgc-white bd bdrs-3 p-20">
                    <table class="table table-hover">
                        <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Title</th>
                            <th scope="col">Send</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        @foreach($notifications as $notification)
                            <tr>
                                <th scope="row">{{$notification->id}}</th>
                                <td>{{$notification->translation('title', 'uz')}}</td>
                                <td>{{$notification->created_at}}</td>
                                <td><a href="{{route('dashboard.notifications.show', $notification->id)}}">
                                        <i class="ti-pencil"></i>
                                    </a>
                                </td>
                            </tr>
                        @endforeach
                        </tbody>
                    </table>
                    {{$notifications->links()}}
                </div>
            </div>
        </div>
    </div>
@endsection

@push('scripts')

@endpush
