@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Dashboard</div>

                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif

                    You are logged in!
                        @role('administrator')
                            You are an <strong>Administrator</strong>
                        @endrole

                        @role('contributor')
                            You are a <strong>Contributor</strong>
                        @endrole

                        @role('member')
                        You are a <strong>Member</strong>
                        @endrole

                </div>
            </div>
        </div>
    </div>
</div>
@endsection
