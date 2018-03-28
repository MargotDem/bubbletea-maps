<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class BubbleTea extends Model
{
    protected $fillable = ['name', 'address', 'phone', 'open_times', 'additional_info', 'global_note', 'longitude', 'latitude', 'borough', 'price_range'];

    public static function findByBorough($borough) {
      $bubbleteas = BubbleTea::where('borough', $borough)->get();
      return $bubbleteas;
    }
}
