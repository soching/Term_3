<?php

function createAccount(string $name, string $email, string $password, string $image): bool {
    global $connection;
    $statement = $connection->prepare("INSERT INTO users (name, email, password, role, image) 
    VALUES (:name, :email, :password, :role, :image)");
    $statement->execute([
        ':name' => $name,
        ':email' => $email,
        ':password' => $password,
        ':role' => 'user',
        ':image' => $image
    ]);

    return $statement->rowCount() > 0;
}

function accountExist(string $email): array {
    global $connection;
    $statement = $connection->prepare("SELECT * FROM users WHERE email = :email");
    $statement->execute([
        ':email' => $email
        ]);
       if($statement->rowCount() > 0) {
           return $statement->fetch();
       } else {
            return [];
       }

}