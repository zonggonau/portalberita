<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title inertia>{{ config('app.name', 'Laravel') }}</title>
        <link rel="stylesheet" href="{{ asset('/build/css/style.css') }}">

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;600;700&amp;display=swap" rel="stylesheet">

        <!-- Scripts -->
        @routes
        @viteReactRefresh
        @vite('resources/js/app.jsx')
        @inertiaHead
    </head>
    <body class="text-gray-700 pt-9 sm:pt-10">
        @inertia
        
        <script src="{{asset('build/js/theme.js')}}"></script>
        <script src="{{asset('build/js/glightbox.min.js')}}"></script>
        <script src="{{asset('build/js/hc-sticky.js')}}"></script>
        <script src="{{asset('build/js/splide.min.js')}}"></script>
    </body>
</html>
