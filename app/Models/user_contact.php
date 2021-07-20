<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class use_contact extends Model
{
    protected $table="use_contact";
    protected $fillable = [
        'id','name','email','subject','message','created_at','updated_at'
    ];
}
