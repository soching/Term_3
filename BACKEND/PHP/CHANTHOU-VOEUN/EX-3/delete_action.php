<?php
include "./database.php";
if (isset($_GET['id'])){
    $id = $_GET['id'];
    $statement = $connection->prepare("delete from posts where id=:id");
    $statement->execute([":id"=>$id]);
}
header('Location: ./index.php');