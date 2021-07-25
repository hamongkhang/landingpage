<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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
Route::get('/expenses', 'ExpenseController@index')->name('expenses.all');

Route::post('/expenses', 'ExpenseController@store')->name('expenses.store');
Route::post('/clients', 'ClientController@store')->name('clients.store');

Route::post('/donations', 'DonationController@store')->name('donations.store');

Route::get('/expenses/{expense}', 'ExpenseController@show')->name('expenses.show');

Route::post('/expenses/{expense}', 'ExpenseController@update')->name('expenses.update');

Route::delete('/expenses/{expense}', 'ExpenseController@destroy')->name('expenses.destroy');
Route::get('/backgrounds', 'BackgroundController@index')->name('backgrounds.all');
Route::get('/background_items', 'BackgroundItemController@index')->name('background_items.all');
Route::get('/milestones', 'MilestoneController@index')->name('milestones.all');
Route::get('/impacts', 'ImpactController@index')->name('impacts.all');
Route::get('/admissions', 'AdmissionController@index')->name('admissions.all');
Route::get('/count', 'CountController@index')->name('count.all');
Route::get('/companys', 'CompanyController@index')->name('companys.all');
Route::get('/board', 'BoardController@index')->name('board.all');
Route::get('/gallery', 'GalleryController@index')->name('gallery.all');
Route::get('/recruitment', 'RecruitmentController@index')->name('recruitment.all');
Route::get('/localcompany', 'LocalcompanyController@index')->name('localcompany.all');
Route::get('/student', 'StudentController@index')->name('student.all');
Route::get('/staff', 'StaffController@index')->name('staff.all');
Route::get('/status', 'StatusController@index')->name('status.all');


Route::post('/contacts','ContactController@mail');

Route::get('/bangtins', 'BangtinController@index')->name('bangtins.all');




