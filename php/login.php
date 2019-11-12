<?php
    // //登录页
    header("Content-Type:text/html;charset=utf-8");
    
    $uphone = $_POST['uphone'];

    $upwd = $_POST['upwd'];

    $conn = mysqli_connect('localhost','root','');
    
    mysqli_select_db($conn,"studentysy");

    mysqli_query($conn,"set names utf8");

    $sql = "select * from user where uphone = '$uphone'";

    $row = mysqli_query($conn,$sql);

    $arr = mysqli_fetch_array($row);

    if($arr){
        if($arr['upwd'] === $upwd){
            echo 1;
        }else{
            echo 0;
        }
    }else{
        echo 0;
    }

?>