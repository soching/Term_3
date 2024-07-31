<?php
// Get current date
date_default_timezone_set('Asia/Phnom_Penh');
require_once("database.php");

$statement = $db->prepare("SELECT * FROM posts");
$statement->execute();
$posts = $statement->fetchAll();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $title = $_POST['title'];
    $description = $_POST['description'];

    $statement = $db->prepare("INSERT INTO posts (title, description) VALUES (:title, :description)");
    $statement->execute([
        ':title' => $title,
        ':description' => $description, 
    ]);
    header('Location:index.php');
}

?>

