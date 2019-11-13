<?php
    //手机号验证页
    header("Content-Type:text/html;charset=utf-8");

    $uphone = $_GET['uphone'];

    $conn = mysqli_connect('localhost','root','');

    mysqli_select_db($conn,"studentysy");

    mysqli_query($conn,"set names utf8");

    $sql = "select * from user where uphone = '$uphone'";
    
    $row = mysqli_query($conn,$sql);

    $arr = mysqli_fetch_array($row);

    if($arr){
        echo 1;
    }else{
        echo 0;
    }

?>