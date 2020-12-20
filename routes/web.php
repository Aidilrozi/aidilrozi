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
$projects = [
    ['id' => 1, 'thumbnail' => 'images/house2.jpg','info' => 'O2O Digital'],
    ['id' => 2, 'thumbnail' => 'images/house3.jpg','info' => 'Nippon Paint'],
    ['id' => 3, 'thumbnail' => 'images/house4.jpg','info' => 'FMX Express'],
    ['id' => 4, 'thumbnail' => 'images/house5.jpg','info' => 'Fluoluxus'],
    ['id' => 5, 'thumbnail' => 'images/house5.jpg','info' => 'Tri-E Multimedia'],
    ['id' => 6, 'thumbnail' => 'images/house5.jpg','info' => 'Just Simple'],

    
];

$contacts = [
    ['id' => 1, 'thumbnail' => 'images/team1.jpg','name' => 'John Doe','designation' => 'CEO & Founder', 'about'=>'Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.'],
    ['id' => 2, 'thumbnail' => 'images/team2.jpg','name' => 'Jane Doe','designation' => 'Architect', 'about'=>'Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.'],
    ['id' => 3, 'thumbnail' => 'images/team3.jpg','name' => 'Mike Ross','designation' => 'Architect', 'about'=>'Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.'],
    ['id' => 4, 'thumbnail' => 'images/team4.jpg','name' => 'Dan Star','designation' => 'Architect', 'about'=>'Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.'],

   
    
];
Route::get('/welcome', function () {
    return view('welcome');
});
Route::get('/projects', function () use ($projects){
    return response()->json($projects);
});
Route::get('/contacts', function () use ($contacts){
    return response()->json($contacts);
});
Route::get('/', function () {
    return view('portfolio');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
