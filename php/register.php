<?php
    //注册页
    header("Content-Type:text/html;charset=utf-8");
    
    $uphone = $_GET['uphone'];

    $upwd = $_GET['upwd'];

    $conn = mysqli_connect('localhost','root','');
    
    mysqli_select_db($conn,"studentysy");

    mysqli_query($conn,"set names utf8");

    $sql = "insert into user (uphone,upwd) value ('$uphone','$upwd')";

    $row = mysqli_query($conn,$sql);

    echo json_encode($row);

    if($row){
        echo 1;
    }else{
        echo 0;
    }

?>