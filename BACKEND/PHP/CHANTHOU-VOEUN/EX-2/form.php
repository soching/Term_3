<!-- WRIRE CODE PHP Submit FORM WITH VALIDATION -->
<?php

// ----to get data from input-------------//
function getUsername(){
    if($_SERVER['REQUEST_METHOD'] == 'POST'){
        if(isset($_POST['username'])){
            $username = $_POST['username'];
            return $username;
        }
    }
}
function getPassword(){
    if($_SERVER['REQUEST_METHOD'] == 'POST'){
        if(isset($_POST['username'])){
            $password = $_POST['password'];
            return $password;
        }
    }
}

//--------variable-------------//
$values =[
    "username"=>'',
    "password"=>''
];

$erros = [
    "username"=>'',
    "password"=>''
];

$is_form= false;
$isUsername = false;
$isPassword = false;

//---------User input name-----------------//
if (preg_match("/^[a-zA-Z0-9]+$/", getUsername())){
    $values['username'] = getUsername();
    $isUsername = true;
}else{
    $values['username'] = '';
    $erros['username'] = 'Please enter the username';
    $isUsername = false;
}

//-------User input password------------//
if (preg_match("/^(?=.*[A-Z])(?=.*[!@#$])[a-zA-Z0-9!@#$]{5,}+$/", getPassword())){
    $values['password'] = getPassword();
    $isPassword = true;
}else{
    $values['password'] = '';
    $erros['password'] = 'Please enter the username';
    $isPassword = false;
}

if ($isPassword && $isUsername){
    $is_form = true;
}else{
    $is_form = false;
}


?>





<div class="container">
    <div class="row">
        <div class="col-4"></div>
        <div class="col-4">
            <div class="card">
                <div class="card-header">
                    <h1>Form</h1>
                </div>
                <div class="card-body">
                    <form action="#" method="post">
                        <div class="mb-3">
                            <label for="username" class="form-label">Username</label>
                            <input type="text" class="form-control" value="" id="username" name="username" value="">
                            <small class="form-text text-danger">
                                <?php echo $erros['username']; ?>
                            </small>
                        </div>
                        <div class="mb-3">
                            <label for="password" class="form-label">password</label>
                            <input type="text" class="form-control" value="" id="password" name="password" value="">
                            <small class="form-text text-danger">
                                <?php echo $erros['password']; ?>
                            </small>
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
        <div class="col-4"></div>
    </div>
</div>
<br>
<?php
if ($is_form):
    ?>
    <div class="container">
        <div class="row">
            <div class="col-4"></div>
            <div class="col-4">
                <div class="card">
                    <div class="card-body">
                        <p>
                            username:
                            <?= $values['username'] ?>
                        </p>
                        <p>
                            password:
                            <?= $values['password'] ?>
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-4"></div>
        </div>
    </div>
    <?php
endif;
?>