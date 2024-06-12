<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function formRegister(){
        return view("auth.register");
    }
    public function formLogin(){
        return view("auth.login");
    }
}
