<?php 
    require 'db.php';

    function error422($message){
        $data = [
            'status' =>422,
            'message' =>$message,
        ];
        header("HTTP/1.0 422 Unprocessable Entry");
        echo json_encode($data);
        exit();
    }

    function storeUser($userInput)
    {
        global $conn;

        $firstName = mysqli_real_escape_string($conn, $userInput['firstName']);
        $lastName = mysqli_real_escape_string($conn, $userInput['lastName']);
        $gender = mysqli_real_escape_string($conn, $userInput['gender']);
        $city = mysqli_real_escape_string($conn, $userInput['city']);
        $password = mysqli_real_escape_string($conn, $userInput['password']);

                if(empty(trim($firstName))){
                    return error422('Enter your first name');
                }
                if(empty(trim($lastName))){
                    return error422('Enter your last name');
                }
                if(empty(trim($gender))){
                    return error422('Enter your gender');
                }
                if(empty(trim($city))){
                    return error422('Enter your city');
                }
                if(empty(trim($password))){
                    return error422('Enter the password');
                }

        else
        {
            $insertQuery = "INSERT INTO userinfo(`firstName`, `lastName`, `gender`, `city`, `password`)
                VALUES('$firstName', '$lastName', '$gender','$city', '$password')";

            // echo $insertQuery;
            $result = mysqli_query($conn, $insertQuery);

            if($result)
            {
                $data = [

                    'status' =>201,
                    'message' =>'User inserted successfully',
                ];
                header("HTTP/1.0 201 Created");
                return json_encode($data);
            }
            else
            {
                $data = [
                    'status' =>500,
                    'message' =>'internal server error',
                ];
                header("HTTP/1.0 500 internal server error");
                return json_encode($data);
            }

        }
    }

    function getcustomerList(){

        global $conn;

        $query = "select * from userInfo";
        $query_run = mysqli_query($conn, $query);

        if($query_run)
        {
            
            if(mysqli_num_rows($query_run) > 0)
            {

                $res = mysqli_fetch_all($query_run, MYSQLI_ASSOC);

                $data = [
                    'status' =>200,
                    'message' =>'User list fetch successfully',
                    'data' =>$res
                ];
                header("HTTP/1.0 200 Ok");
                return json_encode($data);
        

            }else
            {
                $data = [
                    'status' =>404,
                    'message' =>'No User Find',
                ];
                header("HTTP/1.0 404 No User Find");
                return json_encode($data);
            }
        }

        else
        {
            $data = [
                'status' =>500,
                'message' =>'Internal server error',
            ];
            header("HTTP/1.0 500 Internal server error");
            return json_encode($data);

        }
    }
?>