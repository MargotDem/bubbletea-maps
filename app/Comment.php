<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
  protected $fillable = ['id', 'author_name', 'text', 'bubble_tea_id'];

  public static function fetchComments($id)
  {
    $comments = Comment::where('bubble_tea_id', $id)->orderBy('created_at', 'desc')->get();
    return $comments;
  }

  public static function store($values)
  {
    $comment = new Comment;
    $comment->text = $values['text'];
    $comment->author_name = $values['author_name'];
    $comment->bubble_tea_id = $values['bubble_tea_id'];
    $comment->save();
    return $comment;
  }
}
