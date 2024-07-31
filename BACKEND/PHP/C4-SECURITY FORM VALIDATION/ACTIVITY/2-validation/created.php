<?php 

require_once ('databases.php');
if($_SERVER['REQUEST_METHOD']=='POST'){
// var_dump($_POST);
    $name=$_POST['name'];
    $email=$_POST['email'];
    $message=$_POST['message'];

    $statement=$connection->prepare("INSERT INTO informantion (name,email,message) VALUES(:name,:email,:message)");
    $statement->execute([
        ":name"=>$name,
        ":email"=>$email,
        ":message"=>$message
    ]);
    header("Location: index.php");
}


?>