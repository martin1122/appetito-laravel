@extends('dashboard.moderator.master')

@section('content')
    <div id="vue-app">
        <dashboard></dashboard>
    </div>
@endsection

@push('scripts')
    <script src="{{asset('js/modules/moderator.js')}}"></script>
@endpush
