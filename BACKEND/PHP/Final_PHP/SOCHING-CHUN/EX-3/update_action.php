<?php
// Get current date
date_default_timezone_set('Asia/Phnom_Penh');

require_once('database.php');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $title = $_POST['title'];
    $description = $_POST['description'];
    if (isset($_POST['id'])) {
        $statement = $db->prepare("UPDATE posts SET title= :title, description = :description WHERE id = :id");
        $statement->execute([
            ':title'=>$title,
            ':description'=>$description,
            ':id'=>$_POST['id']
        ]);
    }
}

header('Location:index.php');