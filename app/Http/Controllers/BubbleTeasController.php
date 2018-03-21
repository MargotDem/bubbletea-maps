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
  public function index()
  {
    return BubbleTea::all();
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
    $this->validate($request, [
      'name' => 'required|max:50',
      'address' => 'required|100',
      'phone' => 'required|14',
      'open_times' => 'required|255',
      'additional_info' => 'required|255',
      'global_note' => 'required|integer',
      'longitude' => 'required|numeric',
      'latitude' => 'required|numeric',
      'borough' => 'required|integer',
      'price_range' => 'required|50'
    ]);

    $bubbletea = BubbleTea::create($request->all());

    return response()->json($bubbletea, 201);
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
  public function update(Request $request, BubbleTea $bubbletea)
  {
    $bubbletea->update($request->all());
    return response()->json($bubbletea, 200);
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
}
