<?php
require_once ("Tamplate/header.php");
?>

<div class="container mt-5">
    <?php 
        require_once ('model/item.php');
        $items=getItems();
        // print_r($items)
        foreach ($items as $item) :
        header('view/created_view.php');
    ?>
    <div class="card">
        <div class="card-body">
            <h1 class="card-title"><?= $item['name'] ?></h1>
            <span class='badge badge-danger'><?= $item['email'] ?></span>
        </div>
    </div>
    <?php endforeach ?>
</div>

<?php
require_once ("Tamplate/footer.php");
?>