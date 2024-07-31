<?php require_once 'partials/header.php';?>
<div class="container mt-5">
   <div class="row">
    <div class="col-3"></div>
    <div class="col-6">
        
        <div class="card bg-light">
            <div class="card-body">
                <?php 
                 // your code here
                 include "./database.php";
                 $statement = $connection->prepare("select * from posts where id=:id");
                 $statement->execute([
                    ":id"=>$_GET['id']
                 ]);
                 $posts = $statement->fetch();

                ?>
                <form action="update_action.php" method="POST">
                    <input type="hidden" name="id" value="<?= $posts['id']; ?>">
                    <div class="mb-3">
                        <input type="text" name="title" value="<?= $posts['title']; ?>" class="form-control" placeholder="Title">
                    </div>
                    <div class="mb-3">
                       <textarea name="description"  placeholder="Description" class="form-control"><?= $posts['description']; ?></textarea>
                    </div>
                    <div class="mb-3 d-grid gap-2">
                        <button class="btn btn-warning btn-block">Update Now</button>
                    </div>
                </form>
        </div>
    </div>
    <div class="col-3"></div>
   </div>
</div>
<?php require_once 'partials/footer.php';?>