<?php
use Illuminate\Support\Facades\Route;

Route::get('/', function(){
    return view('home');
});

Route::get('/blogs', function(){
    return view('blogs');
});

Route::get('/contacto', function(){
    return view('contacto');
});

Route::get('/form', function(){
    return view('form');
});








