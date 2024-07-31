
<?php 
require '../../database/database.php';
require '../../models/item.model.php';
if($_SERVER['REQUEST_METHOD']=='POST'){
    $title = $_POST['title'];
    $description = $_POST['description'];
    if(createItem($title,$description)){
        header('location: /items');
    }else{
        header('location: /form_create_item');
    }
}