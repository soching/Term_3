<?php
//connection databases

$connection = new PDO("mysql:host=localhost;dbname=a", "root", "");

function getItems()
{
    global $connection;
    $statement=$connection->prepare('SELECT * FROM items ORDER BY  id DESC');
    $statement->execute();
    return $statement->fetchAll();
}

function getItemById($id)
{
    global $connection;
    $statement=$connection->prepare('SELECT * FROM items WHERE id = :id');
    $statement->execute([
        ':id'=>$id,
    ]);
    return $statement->fetch();
}

function deleteItems($id)
{
    global $connection;
    $statement=$connection->prepare('DELETE FROM items WHERE id = :id');
    $statement->execute([
        ':id'=>$id,
    ]);
    return $statement->rowCount() > 0;
}
function updateItems($id)
{
    global $connection;
    $statement=$connection->prepare('UPDATE  items SET name =:name, email = :email WHERE id = :id');
    $statement->execute([
        ':name'=>$name,
        ':email'=>$email,
        ':id'=>$id
    ]);
    return $statement->rowCount() > 0;
}

function createdItems($name,$email)
{
    global $connection;
    $statement = $connection->prepare('INSERT INTO items(name,email) VALUES (:name,:email)');
    $statement->execute([
        ':name'=>$name,
        ':email'=>$email,
    ]);
    return $statement->rowCount() > 0;
}


