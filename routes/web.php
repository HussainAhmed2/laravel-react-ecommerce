<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/



Route::get( '/Admin/{path?}', function(){

    return view( 'admin' );
} )
->where('admin/path', '^((?!api).)*$'); /*except api */


Route::get( '/admin/{path?}', function(){

    return view( 'admin' );
} )
->where('Admin/path', '^((?!api).)*$');

Route::get( '/{path?}', function(){

    return view( 'welcome' );
} )
->where('path', '^((?!api).)*$'); /*except api */



