const mix = require('laravel-mix');

mix.copyDirectory('resources/backend', 'public/backend');
mix.copyDirectory('resources/frontend', 'public/frontend');