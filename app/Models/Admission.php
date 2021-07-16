<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;



class Admission extends Model
{
    protected $table="admissions";
    protected $fillable = [
        'admission_id','admission_content','created_at','updated_at'
    ];
}