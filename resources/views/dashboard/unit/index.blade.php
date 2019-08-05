@extends('dashboard.administrator.master')

@section('content')
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12">
                <div class="bgc-white bd bdrs-3 p-20 mB-20">

                    <a class="btn btn-primary mB-20"
                       href="{{ route('dashboard.units.create') }}">
                        <i class="ti-plus"></i> Add Unit
                    </a>

                    <table class="table">
                        <thead class="thead-light">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">{{ \App\Models\Language::UZBEK }}</th>
                            <th scope="col">{{ \App\Models\Language::RUSSIAN }}</th>
                            <th scope="col">{{ \App\Models\Language::ENGLISH }}</th>
                        </tr>
                        </thead>
                        <tbody>
                            @foreach($units as $unit)
                                <tr role="row" class="odd">
                                    <td class="sorting_1">
                                        <a href="{{ route('dashboard.units.edit', $unit->id) }}">
                                            <i class="ti-pencil"></i>
                                        </a>
                                    </td>
                                    <td>{{ $unit->translation('name', \App\Models\Language::UZBEK) }}</td>
                                    <td>{{ $unit->translation('name', \App\Models\Language::RUSSIAN) }}</td>
                                    <td>{{ $unit->translation('name', \App\Models\Language::ENGLISH) }}</td>
                                </tr>
                            @endforeach
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
@endsection

@push('scripts')

@endpush
