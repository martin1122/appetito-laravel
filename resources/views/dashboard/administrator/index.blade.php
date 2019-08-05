@extends('dashboard.administrator.master')

@section('content')
    <div class="row gap-20 masonry pos-r">
        <div class="masonry-sizer col-md-6"></div>

            @include('dashboard.blocks.stats.user-widgets')

            @include('dashboard.blocks.stats.monthly')

            @include('dashboard.blocks.stats.todo')

            @include('dashboard.blocks.stats.chat')
    </div>
@endsection
