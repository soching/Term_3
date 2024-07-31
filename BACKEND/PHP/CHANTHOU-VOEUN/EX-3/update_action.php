<?php
// Get current date
date_default_timezone_set('Asia/Phnom_Penh');


include "./database.php";


if ($_SERVER['REQUEST_METHOD'] == 'POST'){
    if (isset($_POST['title']) && isset($_POST['description'])){
        $id = $_POST['id'];
        $title = $_POST['title'];
        $description = $_POST['description'];
        $date = date("Y-m-d");
        $statement = $connection->prepare("update posts set title=:title, description=:description, post_date=:date where id=:id");
        $statement->execute([
            ":id"=>$id,
            ":title"=>$title,
            ":description"=>$description,
            ":date"=>$date
        ]);
    }
}
header('Location: ./index.php');