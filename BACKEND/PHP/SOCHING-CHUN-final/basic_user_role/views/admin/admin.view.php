<?php
    if(!isset($_SESSION['user'])) {
        header('Location: /signin');
        die();
    }
?>
<?php if (isset($_SESSION['success'])): ?>
<div class="alert alert-success alert-dismissible fade show" id="alert">
    <button type="button" class="close" data-dismiss="alert">&times;</button>
    <?= $_SESSION['success'] ?>
  </div>
<?php 
unset($_SESSION['success']);
endif;
?>
<h1>Hell I am admin</h1>
<a href="/signout">Sign Out</a> 
