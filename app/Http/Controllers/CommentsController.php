<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Comment;
use App\BubbleTea;

class CommentsController extends Controller
{
  public function index(Request $request)
  {
    return Comment::orderBy('created_at', 'desc')->get();
  }

  public function fetchComments(BubbleTea $bubbletea)
  {
    $id = $bubbletea->id;
    return Comment::fetchComments($id);
  }

  public function store(Request $request)
  {
    $comment = Comment::store($request->all());
    return $comment;
  }

  public function destroy(Comment $comment)
  {
    $comment->delete();
  }
}
