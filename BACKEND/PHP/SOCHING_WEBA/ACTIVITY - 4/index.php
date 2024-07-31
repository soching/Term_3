<?php 
// include of header
require_once("includes/header.php");
// include navbar
require_once("includes/navbar.php");
//  include of pages 
if (isset($_GET['page'])){
    require_once('pages/'.$_GET['page'].'.php');
}
//  include of footer 
require_once("includes/footer.php");


