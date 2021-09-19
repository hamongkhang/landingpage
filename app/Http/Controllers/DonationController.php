<?php
namespace App\Http\Controllers;
use Illuminate\Contracts\Session\Session;
use App\Exports\XxxExport;
use Maatwebsite\Excel\Facades\Excel;
use App\Jobs\SendEmail;
use App\Models\Donation;
use Illuminate\Http\Request;
use PDF;
use App\Models\Thongbao;
use File;
class DonationController extends Controller
{
   

    public function store(Request $request)
    {
        $donation=new Donation;
        $thongbao=new Thongbao;
        $thongbao->name="Thông báo ủng hộ";
        $thongbao->content=$request->name." đã ủng hộ.";
        $thongbao->save();
        $amount=$request->money;
        $donation->money=$request->money;
        $donation->name=$request->name;
        $donation->lastName=$request->lastName;
        if ($request->companyName==null){
            $donation->companyName="không có";
        }else{
            $donation->companyName=$request->companyName;
        }
        $donation->birthday=$request->birthday;
        $donation->address1=$request->address1;
        $donation->address2=$request->address2;
        $donation->address3=$request->address3;
        $donation->email=$request->email;
        $donation->phone=$request->phone;
        $donation->save();
            $endpoint = "https://payment.momo.vn/gw_payment/transactionProcessor";
            $partnerCode = "MOMO282120210723";
            $accessKey = "2kaH6NTAVM8GYqas";
            $serectkey = "bUo0fG0ZOxQmUrV3Ryj6VSwvF6bOvwCN";
            $orderId = time() ."";
            $orderInfo ="Thanh toán qua MoMo";
            //$amount = "5000";
            $notifyurl = "http://localhost:8000/paymomo/ipn_momo.php";
            $returnUrl = "http://localhost:8000/paymomo/result.php";
            $extraData = "merchantName=MoMo Partner";
            $requestId = time() . "";
            $requestType = "captureMoMoWallet";
            $rawHash = "partnerCode=" . $partnerCode . "&accessKey=" . $accessKey . "&requestId=" . $requestId . "&amount=" . $amount . "&orderId=" . $orderId . "&orderInfo=" . $orderInfo . "&returnUrl=" . $returnUrl . "&notifyUrl=" . $notifyurl . "&extraData=" . $extraData;
            $signature = hash_hmac("sha256", $rawHash, $serectkey);
            $data = array('partnerCode' => $partnerCode,
                'accessKey' => $accessKey,
                'requestId' => $requestId,
                'amount' => $amount,
                'orderId' => $orderId,
                'orderInfo' => $orderInfo,
                'returnUrl' => $returnUrl,
                'notifyUrl' => $notifyurl,
                'extraData' => $extraData,
                'requestType' => $requestType,
                'signature' => $signature);


                
                $ch = curl_init($endpoint);
                curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
                curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
                curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
                curl_setopt($ch, CURLOPT_HTTPHEADER, array(
                        'Content-Type: application/json',
                        'Content-Length: ' . strlen(json_encode($data)))
                );
                curl_setopt($ch, CURLOPT_TIMEOUT, 5);
                curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 5);
                //execute post
                $result = curl_exec($ch);
                //close connection
                curl_close($ch);


         
            $jsonResult = json_decode($result, true); 

            return response()->json(["message" => $jsonResult['payUrl']]);
            //header('Location: ' . $jsonResult['payUrl']);
     
    }
  
}
