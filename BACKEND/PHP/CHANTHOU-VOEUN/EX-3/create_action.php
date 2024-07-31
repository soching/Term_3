<?php
// Get current date
date_default_timezone_set('Asia/Phnom_Penh');
include "./database.php";

if ($_SERVER['REQUEST_METHOD'] == 'POST'){
    if (isset($_POST['title']) && isset($_POST['description'])){
        if (!empty($_POST['title']) && !empty($_POST['description'])){
            $title = $_POST['title'];
            $description = $_POST['description'];
            $date = date("Y-m-d");
            $statement = $connection->prepare("insert into posts(title, description, post_date) values(:title, :description, :date)");
            $statement->execute([
                ":title"=>$title,
                ":description"=>$description,
                ":date"=>$date
            ]);
        }else{
            error_log('You must input all field!');
        }
    }
}
header('Location: ./index.php');

