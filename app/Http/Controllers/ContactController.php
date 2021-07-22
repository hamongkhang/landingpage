<?php

namespace App\Http\Controllers;

use App\Jobs\SendEmail;
use App\Models\User_contact;
use App\Models\Thongbao;
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
        $thongbao=new Thongbao;
        $thongbao->name="Thông báo liên hệ";
        $thongbao->content=$request->email." đã gửi mail liên hệ.";
        $thongbao->save();
        $test =  SendEmail::dispatch($data)->delay(now()->addMinute(1));
        if($test) {
            return response()->json();
        }
    }
}