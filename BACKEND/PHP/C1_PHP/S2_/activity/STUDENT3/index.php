<?php 
// include of header
include_once("includes/header.php");
// include navbar
include_once("includes/navbar.php");
//  include of pages 
if(isset($_GET['page'])){
    include("pages/".$_GET['page'].".php");
}
//  include of footer 
include_once("includes/footer.php");



