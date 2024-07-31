<?php
require_once ("../Tamplate/header.php");
?>

<div class="container mt-5">
    <form action="../controller/created_controller.php" method="post">
        <div class="group-form">
            <input type="text" name="item_name" class="form-control" placeholder="item-name">
        </div>
        <div class="group-form">
            <input type="text" name="item_email" class="form-control" placeholder="item-email">
        </div>
        <div class="group-form">
            <button class="btn btn-primary btn-block" type="submit">Add Item</button>
        </div>
    </form>
</div>

<?php
require_once ("../Tamplate/footer.php");
?>