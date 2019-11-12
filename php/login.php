<?php
    // //登录页
    header("Content-Type:text/html;charset=utf-8");
    
    // $uphone = $_GET['uphone'];

    $upwd = $_GET['upwd'];

    // $conn = mysqli_connect('localhost','root','');
    
    // mysqli_select_db($conn,"studentysy");

    // mysqli_query($conn,"set names utf8");

    // $sql = "select * from user where uphone = '$uphone'";

    // $row = mysqli_query($conn,$sql);

    // $arr = mysqli_fetch_array($row);

    // echo $arr;

    // echo json_encode($row);

    // if($row){
    //     echo 1;
    // }else{
    //     echo 0;
    // }

    echo $upwd;

?>