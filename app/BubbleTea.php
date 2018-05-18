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

    public static function store($nvmind)
    {
      BubbleTea::create([
        'name' => $nvmind['name'],
        'address' => $nvmind['address'],
        'phone' => $nvmind['phone'],
        'open_times' => $nvmind['open_times'],
        'additional_info' => $nvmind['additional_info'],
        'longitude' => $nvmind['longitude'],
        'latitude' => $nvmind['latitude'],
        'borough' => $nvmind['borough'],
        'price_range' => $nvmind['price_range']
      ]);
      return 'good';
    }

    public static function storeAverage($id, $global_note, $note_votes)
    {
      $bubbletea = BubbleTea::find($id);
      $bubbletea->global_note = $global_note;
      $bubbletea->note_votes = $note_votes;
      $bubbletea->save();
      return;
    }
}
