<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class BubbleTea extends Model
{
    protected $fillable = ['name', 'address', 'phone', 'open_times', 'additional_info', 'global_note', 'longitude', 'latitude', 'borough', 'price_range'];
}
