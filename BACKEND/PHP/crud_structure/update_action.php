<?php
// TODO
//TODO:
require_once ('database.php');
if($_SERVER['REQUEST_METHOD']=='POST'){
// var_dump($_POST);
    $name=$_POST['name'];
    $age=$_POST['age'];
    $class=$_POST['class'];
    $id=$_POST['id'];

    $statement=$connection->prepare("UPDATE users SET name=:name,age=:age, class=:class WHERE id =:id");
    $statement->execute([
        ":id"=>$id,
        ":name"=>$name,
        ":age"=>$age,
        ":class"=>$class
    ]);
    header("Location: index.php");
}


