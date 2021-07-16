<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;



class Recruitment extends Model
{
    protected $table="recruitment";
    protected $fillable = [
        'recruitment_id','organisation','reporting','status','start_date','location','background','responsibility','skill','language','created_at','updated_at'
    ];
}