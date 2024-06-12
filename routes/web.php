<?php

use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get("/register",[AuthController::class,"formRegister"])->name("form.register");
Route::post("/register",[AuthController::class,"Register"])->name("auth.register");


Route::get("/login",[AuthController::class,"formLogin"])->name("form.login");
Route::post("/login",[AuthController::class,"Login"])->name("auth.login");

Route::view("/{any}","app")->where("any", ".*");
Route::view("/{pathMath}","app")->where("pathMath",".*");
