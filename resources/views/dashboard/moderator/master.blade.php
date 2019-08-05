<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Moderator Dashboard</title>
</head>
<body>

    @yield('content')

    <script src="{{asset('js/manifest.js')}}"></script>
    <script src="{{asset('js/vendor.js')}}"></script>
@stack('scripts')
</body>
</html>
