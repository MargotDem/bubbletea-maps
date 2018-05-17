<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Admin extends Model
{
    public static function logIn($email, $password) {
      // return 'coucou';
      // $admin = Admin::where('email', $email)
      //           // ->where('password', $password)
      //           ->get();
      // return $admin;

      $values = [];
      array_push($values, $email);
      array_push($values, $password);

      $admin = DB::select("SELECT * FROM admin WHERE email = ? AND password = ?", $values);
      return $admin;
    }
}
