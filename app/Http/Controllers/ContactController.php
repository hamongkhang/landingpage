<?php

namespace App\Http\Controllers;

use App\Jobs\SendEmail;
use App\Models\User_contact;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    public function mail(Request $request)
    {
        $data = [
            'title' => 'Mail from user',
            'name' => $request->name,
            'email' => $request->email,
            'subject' => $request->subject,
            'message' => $request->message
        ];
        $test =  SendEmail::dispatch($data)->delay(now()->addMinute(1));
        if($test) {
            return response()->json();
        }
    }
}