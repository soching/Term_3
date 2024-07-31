<?php require_once('templates/header.php') ?>
<ul class="list-group">
<?php
   // YOUR CODE HERE
   if ($_SERVER['REQUEST_METHOD']=='POST'){
    if(isset($_POST['name'])&&isset($_POST['number'])&&isset($_POST['email'])&&isset($_POST['password'])&&isset($_POST['message'])){
        $_name=$_POST['name'];
        $_number=$_POST['number'];
        $_email=$_POST['email'];
        $_password=$_POST['password'];
        $_message=$_POST['message'];

    }
   }
?>
    <li class="list-group-item"><?php echo $_name ?></li>
    <li class="list-group-item"><?php echo $_number  ?></li>
    <li class="list-group-item"><?php echo $_email ?></li>
    <li class="list-group-item"><?php echo $_password ?></li>
    <li class="list-group-item"><?php echo $_message ?></li>

</ul>
<?php require_once('templates/footer.php') ?>