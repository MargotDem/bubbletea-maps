<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\BubbleTea;

class BubbleTeasController extends Controller
{
  /**
   * Display a listing of the resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function index(Request $request)
  {
    if ($request->input('borough') == 'all') {
      return BubbleTea::all();
    } else {
      return BubbleTea::findByBorough($request->input('borough'));

    }
  }

  /**
   * Display a listing of the resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function test(Request $request)
  {
    return "holaaa";
  }

  /**
   * Show the form for creating a new resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function create()
  {
      //
  }

  /**
   * Store a newly created resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return \Illuminate\Http\Response
   */
  public function store(Request $request)
  {
    // $this->validate($request, [
    //   'name' => 'required|max:50',
    //   'address' => 'required|100',
    //   'phone' => '14',
    //   'open_times' => '255',
    //   'additional_info' => '255',
    //   'longitude' => 'numeric',
    //   'latitude' => 'numeric',
    //   'borough' => 'required|integer',
    //   'price_range' => '50'
    // ]);

    $bubbletea = BubbleTea::store($request->all());

    return $bubbletea;
  }

  public function storeAverage(Request $request)
  {
    $id = $request->input('id');
    $global_note = $request->input('global_note');
    $note_votes = $request->input('note_votes');
    BubbleTea::storeAverage($id, $global_note, $note_votes);
  }

  /**
   * Display the specified resource.
   *
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function show(BubbleTea $bubbletea)
  {
    $BubbleTea = BubbleTea::find($bubbletea->id);
    return $BubbleTea;
  }

  /**
   * Show the form for editing the specified resource.
   *
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function edit($id)
  {
      //
  }

  /**
   * Update the specified resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function update(Request $request)
  {
    $bubbletea = BubbleTea::edit($request->all());

    return $bubbletea;
  }

  /**
   * Remove the specified resource from storage.
   *
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function destroy(BubbleTea $bubbletea)
  {
    $bubbletea->delete();
    return response()->json(null, 204);
  }

  public function fetchComments(BubbleTea $bubbletea)
  {
    // $bubbletea->delete();
    // return response()->json(null, 204);
    // return $bubbletea;
    // return BubbleTea::fetchComments($bubbletea);
    return 'hola';
  }
}
