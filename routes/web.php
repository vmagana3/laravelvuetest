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

Route::get('/newform', function(){
    return view('newform');
});

Route::get('/payment', function(){
    return view('payment');
});







