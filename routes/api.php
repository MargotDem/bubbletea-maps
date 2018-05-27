<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::resource('bubbleteas', 'BubbleTeasController');

Route::post('admin', 'AdminController@logIn');

Route::put('bubbleteas/average', 'BubbleTeasController@storeAverage');

Route::get('comments/{bubbletea}', 'CommentsController@fetchComments');

Route::post('comments', 'CommentsController@store');

Route::get('comments', 'CommentsController@index');

Route::delete('comments/{comment}', 'CommentsController@destroy');
