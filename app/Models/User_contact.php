<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class User_contact extends Model
{
    protected $table="user_contact";
    protected $fillable = [
        'id','name','email','subject','message','created_at','updated_at'
    ];
}