<?php
// TODO:
require_once ("../models/student.php");

if(isset($_GET['id']) && !empty($_GET['id'])){
    $id=$_GET['id'];
    deleteStudent($id);
    header("Location:../index.php");
}