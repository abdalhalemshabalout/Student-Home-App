<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AdminGroupController;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\GroupController;
use App\Http\Controllers\Api\ListController;
use App\Http\Controllers\Api\ProductController;


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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group([
    'prefix' => 'auth'
], function () {
    Route::post('register', [AuthController::class, 'register']);
    Route::post('login', [AuthController::class, 'login']);
    Route::post('logout', [AuthController::class, 'logout'])->middleware('auth:sanctum');

});
Route::group([
    'prefix' => 'admin'
], function () {
    Route::post('add-user-to-group', [AdminGroupController::class, 'addUserToGroup'])->middleware('auth:sanctum');
    Route::delete('delete-user-from-group/{id}', [AdminGroupController::class, 'DeleteUserFromGroup'])->middleware('auth:sanctum');

});

Route::group([
    'prefix' => 'user'
], function(){
    Route::get('profile',[UserController::class, 'profile'])->middleware(('auth:sanctum'));
    Route::post('create-group',[GroupController::class, 'createGroup'])->middleware(('auth:sanctum'));
    Route::post('update-group-name/{id}', [GroupController::class, 'updateGroupName'])->middleware('auth:sanctum');

    //Product
    Route::post('add-product',[ProductController::class, 'AddProduct'])->middleware(('auth:sanctum'));
    
});

Route::group([
    'prefix' => 'list'
], function(){
    Route::get('get-users',[ListController::class, 'getUsers'])->middleware(('auth:sanctum'));
    Route::post('get-group-admins',[ListController::class, 'getGroupAdmins'])->middleware(('auth:sanctum'));
    Route::post('get-group-users',[ListController::class, 'getGroupUsers'])->middleware(('auth:sanctum'));
});