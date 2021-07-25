<?php

// function execPostRequest($url, $data)
// {
//     $ch = curl_init($url);
//     curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
//     curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
//     curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
//     curl_setopt($ch, CURLOPT_HTTPHEADER, array(
//             'Content-Type: application/json',
//             'Content-Length: ' . strlen($data))
//     );
//     curl_setopt($ch, CURLOPT_TIMEOUT, 5);
//     curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 5);
//     //execute post
//     $result = curl_exec($ch);
//     //close connection
//     curl_close($ch);
//     return $result;
// }



$endpoint = "https://payment.momo.vn/gw_payment/transactionProcessor";


//$partnerCode = "MOMO282120210723";
//$accessKey = "2kaH6NTAVM8GYqas";
//$secretKey = "bUo0fG0ZOxQmUrV3Ryj6VSwvF6bOvwCN";
//$orderInfo = "Thanh toán qua MoMo";
//$amount = "5000";
//$orderId = time() ."";
//$returnUrl = "http://localhost:8000/paymomo/result.php";
//$notifyurl = "http://localhost:8000/paymomo/ipn_momo.php";
// Lưu ý: link notifyUrl không phải là dạng localhost
//$extraData = "merchantName=MoMo Partner";


if (!empty($_POST)) {
    $partnerCode = "MOMO282120210723";
    $accessKey = "2kaH6NTAVM8GYqas";
    $serectkey = "bUo0fG0ZOxQmUrV3Ryj6VSwvF6bOvwCN";
    $orderId = time() .""; // Mã đơn hàng
    $orderInfo ="Thanh toán qua MoMo";
    $amount = "5000";
    $notifyurl = "http://localhost:8000/paymomo/ipn_momo.php";
    $returnUrl = "http://localhost:8000/paymomo/result.php";
    $extraData = "merchantName=MoMo Partner";
    $requestId = time() . "";
    $requestType = "captureMoMoWallet";
    
    //before sign HMAC SHA256 signature
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




    $jsonResult = json_decode($result, true);  // decode json

    //Just a example, please check more in there

    header('Location: ' . $jsonResult['payUrl']);
}
?>
<!DOCTYPE html>
<html lang="en">

<body>

                    <form class="" method="POST" target="_blank" enctype="application/x-www-form-urlencoded"
                          action="init_payment.php">
                        
                      
                      
                           
                            
                            <div class="col-md-4">
                               
                                   
                                   
                                        <input type='text' name="returnUrl" value="<?php echo $returnUrl; ?>"
                                               class="form-control"/>
                                   
                                
                            </div>
                        

                        
                      
                            <button type="submit" class="btn btn-primary btn-block">Start MoMo payment....</button>
                       
                       
                    </form>
               


</body>
</html>
