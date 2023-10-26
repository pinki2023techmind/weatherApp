<?php 

    // error_reporting(0); 

    header('Access-Control-Allow-Origin: *'); 
    header("Access-Control-Allow-Credentials: true");
    header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
    header('Access-Control-Max-Age: 1000');
    header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization');

    // header('Access-Control-Allow-Origin:*');
    // header("Access-Control-Allow-Headers: *");
    header('Content-Type:application/json');
    // header('Access-Control-Allow-Method:POST');
    // header('Access-Control-Allow-Headers:Content-Type, Access-Control-Allow-Headers, Authorization, X-request-With');
    echo "hello";
    include('function.php');

    $requestMethod = $_SERVER["REQUEST_METHOD"];

    if($requestMethod == 'POST')
        {
            $inputData = json_decode(file_get_contents("php://input"), true);

            if(empty($inputData))
            {
                $storeUser = storeUser($_POST);
            }
            else
            {
                $storeUser = storeUser($inputData);
                
            }
           echo $storeUser;
        }
        else
        {
            $data = [
                'status' =>405,
                'message' =>$requestMethod. 'Not valid',
            ];
            header("HTTP/1.0 405 Not valid");
            echo json_encode($data);
        }
?>