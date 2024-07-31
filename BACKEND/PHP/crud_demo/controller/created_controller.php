<?php
require_once ("../model/item.php");
if ($_SERVER['REQUEST_METHOD']=='POST')
{
    // print_r($_POST);

    $item_name=$_POST['item_name'];
    $item_email=$_POST['item_email'];
    
    if(!empty($item_name) && !empty($item_name)){
        createdItems($item_name,$item_email);
        header('location:../index.php');
    }
}
