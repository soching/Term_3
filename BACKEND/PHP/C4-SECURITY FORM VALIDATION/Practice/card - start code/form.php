<?php
function secureData($data)
{
    $data = trim($data); //remove space
    $data = htmlspecialchars($data); //not allow to run script
    return $data;
}
$values = [
    'username' => '',
    'code' => '',
];
$errors = [
    'username' => '',
    'code' => '',
];
$is_form = false;

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $values['username'] = isset($_POST['username']) ? $_POST['username'] : '';
    $values['code'] = isset($_POST['code']) ? $_POST['code'] : '';
   
    

    if (!preg_match('/^[a-zA-Z0-9]+$/',$values['username'])){
        $errors['username']="<span style='color:orange'>please complete your user name</span>";
    }
    if (!preg_match('/^(?=.*[A-Z])(?=.*[!@#$])[a-zA-Z0-9!@#$]{8,}$/', $values['code'])){
        $errors['code']="<span style='color:orange'>you must be complete one uppercase</span>";
    }else{
        $is_form = true;
    }
    // show the error message below the username if the username is beside rules below:
    //     - characters(Lower and upper) 
    //     - digits
    // show the error message below code if the code is beside rules below:
    //     - characters(Lower and upper)
    //     - digits
    //     - special characters (!@#$)
    //     - more or equal 8 chars
    //     * the correct code must be:
    //         - has at least one uppercase character 
    //         - has at least one special character
    // both username and code should be checked secureData() function
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
                            <input type="text" class="form-control " value="" id="username" name="username" value="">
                            <small class="form-text text-danger">
                                <?= $errors['username'] ?>
                            </small>
                        </div>
                        <div class="mb-3">
                            <label for="code" class="form-label">Code</label>
                            <input type="text" class="form-control " value="" id="code" name="code" value="">
                            <small class="form-text text-danger">
                                <?= $errors['code'] ?>
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

<?php if ($is_form): ?>
    <div class="container mt-3">
        <div class="row">
            <div class="col"></div>
            <div class="col">
                <div class="card">
                    <div class="card-header text-center">
                        <p>Result</p>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col">Your username is:
                                <?= $values['username'] ?>
                            </div>
                            <div class="col">Your code is:
                                <?= $values['code'] ?>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col"></div>
        </div>
    </div>
    <?php
endif;
?>