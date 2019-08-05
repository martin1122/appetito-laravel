@extends('dashboard.administrator.master')

@section('content')
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12">
                <div class="bgc-white bd bdrs-3 p-20 mB-20">

                    <a class="btn btn-primary mB-20"
                       href="{{ route('dashboard.recipes.create') }}">
                        <i class="ti-plus"></i> Add recipe
                    </a>

                    <table class="table datatable">
                        <thead class="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                        </tr>
                        </thead>
                        <tbody>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
@endsection

@push('scripts')
    <script src="{{asset('js/datatable.js')}}"></script>
    <script type="text/javascript">
        $(document).ready(function() {
            $('.datatable').DataTable({
                processing: true,
                serverSide: true,
                ajax: '{{ route('ajax.datatables.recipes') }}',
                columns: [
                    {
                        data: 'id',
                        name: 'id',
                        render: function (val, type, row) {
                            return '<a href="/dashboard/recipes/' + row.id + '"><i class="ti-pencil"></i></a>';
                        }
                    },
                    {
                        data: 'name',
                        name: 'name'
                    }
                ]
            });
        });
    </script>
@endpush
