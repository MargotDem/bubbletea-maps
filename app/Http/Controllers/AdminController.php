<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Admin;

class AdminController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function logIn(Request $request)
    {
      if ($request->has('email') && $request->has('password')) {
        $admin = Admin::logIn($request->input('email'), $request->input('password'));
        return $admin;
      }
      return null;
    }
}
