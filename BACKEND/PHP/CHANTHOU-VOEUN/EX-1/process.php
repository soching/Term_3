<?php
require_once 'templates/header.php';
?>
<!-- TODO WRITE CODE PHP AFTER SUBMIT FORM -->
<?php

$subjects = '';
if($_SERVER['REQUEST_METHOD'] == 'POST'){
    if (isset($_POST['username']) && isset($_POST['email']) && isset($_POST['password']) && isset($_POST['subjects'])){
        $name = $_POST['username'];
        $birth = $_POST['birth_day'];
        $email = $_POST['email'];
        $password = $_POST['password'];
        $gender = $_POST['gender'];
        $province = $_POST['province'];
        $comment = $_POST['comment'];
        foreach($_POST['subjects'] as $subject){
            $subjects .= $subject.' ';
        }
    }else{
        header('Location: index.php');
    }
}
?>

<div class="container mt-3">
    <div class="card">
        <div class="card-header text-center">
            <p>RESULT</p>
        </div>
        <div class="card-body">
            <div class="row">
                <div class="col">
                    <p>Username is:
                        <?php echo $name; ?>
                    </p>
                </div>
                <div class="col">
                    <p>Your birth day is:
                        <?php echo $birth; ?>
                    </p>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <p>Your email address is:
                        <?php echo $email; ?>
                    </p>
                </div>
                <div class="col">
                    <p>Your password is:
                        <?php echo $password; ?>
                    </p>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <p>Your gender is:
                        <?php echo $gender; ?>
                    </p>
                </div>
                <div class="col">
                    <p>Your province is:
                        <?php echo $province; ?>
                    </p>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <p>Your subjects are:
                        <?php echo $subjects; ?>
                    </p>
                </div>
                <div class="col">
                    <p>Your comment is:
                        <?php echo $comment; ?>
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>


<?php
require_once 'templates/header.php';
?>