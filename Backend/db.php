<?php 

    $host = "localhost";
    $username="root";
    $password="";
    $dbName="weatherapp";
    
    $conn = mysqli_connect($host, $username, $password, $dbName,8080);

    if(!$conn)
    {
        die("connection failed:" .mysqli_connect_error());
    }
    else{
        echo("connection established successful");
    }
?>