<?php require_once 'partials/header.php';?>
<div class="container mt-5">
    <div class="d-flex justify-content-end align-items-center">
        <a href="create_form.php" class="btn btn-primary btn-sm">Add New +</a>
    </div>
    <table class="table table-striped">
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            <?php
                require_once "database.php";
                $statment=$connection->prepare("SELECT * FROM users");
                $statment->execute();
                $users=$statment->fetchAll();
                // var_dump($users);

            ?>

            <?php
            foreach ($users as $values) :
            ?>
            <tr>
                <td> <?=$values['id']?></td>
                <td><?=$values['name']?></td>
                <td><?=$values['age']?></td>
                <td><?=$values['class']?></td>
                <td>
                    <a href="edit_form.php?id=<?=$values['id']?>" class="btn btn-primary btn-sm">Edit</a>
                    <a href="delete_action.php?id=<?=$values['id']?>" class="btn btn-danger btn-sm">Delete</a>
                </td>
            </tr>
            <?php endforeach ?>
        </tbody>
    </table>
</div>
<?php require_once 'partials/footer.php';?>