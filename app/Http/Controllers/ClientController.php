<?php
namespace App\Http\Controllers;
use Illuminate\Contracts\Session\Session;
use App\Exports\XxxExport;
use Maatwebsite\Excel\Facades\Excel;
use App\Jobs\SendEmail;
use App\Jobs\SendEmail2;

use App\Models\Client;
use App\Models\Thongbao;
use Illuminate\Http\Request;
use PDF;
use File;
class ClientController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return IlluminateHttpResponse
     */
    public function index()
    {
        $impacts = Impact::all();
        return response()->json($impacts);
    }
   

    /**
     * Store a newly created resource in storage.
     *
     * @param  IlluminateHttpRequest  $request
     * @return IlluminateHttpResponse
     */
    public function store(Request $request)
    {
        $client=new Client;
        $thongbao=new Thongbao;
        $request->validate([
            'username' => 'required',
            'password' => 'required',
        ]);
              $client->name=$request->username;      
              $client->email=$request->password;  
              $thongbao->name="Thông báo đăng ký";
              $thongbao->content=$request->username." đã đăng ký.";
              $thongbao->save();
              $client->save();

              $data = [
                'title' => 'Mail xác nhận đăng ký',
                'name' => "Admin",
                'email' => $request->password,
                'subject' => "Mail xác nhận đăng ký",
                'message' =>"Mail xác nhận đăng ký"
            ];
            $test =  SendEmail2::dispatch($data)->delay(now()->addMinute(1));

              return response()->json(["message" =>$request->username]);

    }
    // public function createPDF() {
    //     // retreive all records from db
    //     $data = Expense::all();
  
    //     // share data to view

    //     $pdf = PDF::loadView('pdf_view', $data);
  
    //     // download PDF file with download method
    //     return $pdf->download('pdf_file.pdf');
    //   }

    // public function show(Expense $expense)
    // {
    //     return $expense;
    // }

    // /**
    //  * Show the form for editing the specified resource.
    //  *
    //  * @param  AppExpense  $expense
    //  * @return IlluminateHttpResponse
    //  */

    // /**
    //  * Update the specified resource in storage.
    //  *
    //  * @param  IlluminateHttpRequest  $request
    //  * @param  AppExpense  $expense
    //  * @return IlluminateHttpResponse
    //  */
    // public function update(Expense $expense,Request $request)
    // {
    //     $image=$expense->image;
    //     if ($request->hasFile('image'))
    //     {
    //           $file      = $request->file('image');
    //           $filename  = $file->getClientOriginalName();
    //           $extension = $file->getClientOriginalExtension();
    //           $picture   = date('His').'-'.$filename;
    //           $file->move(public_path('img'), $picture);
    //           $expense->image=$picture;
    //           $expense->name=$request->name;
    //           $expense->email=$request->email;      
    //           $expense->save();
    //           return response()->json(["message" => "Upload successfully"]);
    //     } 
    //     else
    //     {
    //         $expense->image=$image;
    //         $expense->name=$request->name;
    //         $expense->email=$request->email;      
    //         $expense->save();
    //           return response()->json(["message" => $request->email]);
    //     }
           
    // }

    // /**
    //  * Remove the specified resource from storage.
    //  *
    //  * @param  AppExpense  $expense
    //  * @return IlluminateHttpResponse
    //  */
}