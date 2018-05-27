<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class BubbleTea extends Model
{
    protected $fillable = ['name', 'address', 'phone', 'open_times', 'additional_info', 'global_note', 'longitude', 'latitude', 'borough', 'price_range', 'pic_link'];

    public static function findByBorough($borough) {
      $bubbleteas = BubbleTea::where('borough', $borough)->get();
      return $bubbleteas;
    }

    public static function store($values)
    {
      BubbleTea::create([
        'name' => $values['name'],
        'address' => $values['address'],
        'phone' => $values['phone'],
        'open_times' => $values['open_times'],
        'additional_info' => $values['additional_info'],
        'longitude' => $values['longitude'],
        'latitude' => $values['latitude'],
        'borough' => $values['borough'],
        'price_range' => $values['price_range'],
        'pic_link' => $values['pic_link']
      ]);
      return 'ok';
    }

    public static function edit($values)
    {
      $bubbletea = BubbleTea::find($values['id']);

      foreach ($values as $key => $value) {
        $bubbletea->$key = $value;
      }
      $bubbletea->save();

      return $bubbletea;
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
