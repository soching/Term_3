<?php require_once 'templates/header.php'; ?>
    <div class="container p-4">
        <div class="d-flex justify-content-end p-4">
           <a href="views/create_view.php" class="btn btn-primary">Add Item +</a>
       </div>
       <?php
        // TODO:
       ?>
        <div class="row">
            <div class="col-12">
                <div class="card mb-3">
                <?php 
                    require_once ("models/student.php");
                    $values = getStudents();
                    // print_r ($values);
                    foreach ($values as $value) :
                ?>
                    <div class="card-body">
                        <ul class="list-group">
                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                <?php echo $value['name'] ?>
                                <span>
                                    <a href="views/edit_view.php?id=<?= $value['id']?>" class="badge badge-primary mr-1"><i class="fa fa-pencil"></i></a>
                                    <a href="controllers/remove_controllerl.php?id=<?= $value['id']?>" class="badge badge-danger"><i class="fa fa-trash"></i></a>
                                </span>
                            </li>
                            <li class="list-group-item"><?= $value['age'] ?></li>
                            <li class="list-group-item"><?= $value['province'] ?></li>
                        </ul>
                    </div>
        <?php endforeach ?>   

                </div>
            </div>
        </div> 
    </div>
    <?php require_once 'templates/footer.php'; ?>