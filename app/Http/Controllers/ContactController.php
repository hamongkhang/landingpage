<?php

namespace App\Http\Controllers;

use App\Jobs\SendEmail;
//use App\Models\User_contact;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    public function mail(Request $request)
    {
       // $h = 'hangqt3621@gmail.com';
        $name=$request->name;
        $email=$request->email;
        $subject=$request->subject;
        $message=$request->message;
        //return response()->json();
        $message = [
            'title' => 'Mail from user',
            'name' =>$request->name,
            'subject' =>$request->subject,
            'message' =>$request->message,
        ];
       SendEmail::to('hangqt3621@gmail.com')->send($message);
    }
}