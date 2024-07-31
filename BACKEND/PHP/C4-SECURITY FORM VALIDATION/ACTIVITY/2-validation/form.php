<?php

function validate_message($message)
{
    // function to check if message is correct (must have at least 10 characters (after trimming))
    if (strlen(trim($message)) < 10) {
        return "Message must be at least 10 characters long";
    }
    return "";
}

function validate_username($username)
{
    // function to check if username is correct (must be alphanumeric => Use the function 'ctype_alnum()')
    if (!ctype_alnum($username)) {
        return "Username should contain only letters and numbers";
    }
    return "";
}

function validate_email($email)
{
    // function to check if email is correct (must contain '@')
    if (!strpos($email, '@')) {
        return "Email must contain '@'";
    }
    return "";
}

$user_error = "";
$email_error = "";
$terms_error = "";
$message_error = "";
$username = "";
$email = "";
$message = "";

$form_valid = false;

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Here is the list of error messages that can be displayed:
    // "Message must be at least 10 characters long"
    // "You must accept the Terms of Service"
    // "Please enter a username"
    // "Username should contain only letters and numbers"
    // "Please enter an email"
    // "Email must contain '@'"

    // Validate the message
    $message = $_POST['message'];
    $message_error = validate_message($message);

    // Validate the username
    $username = $_POST['username'];
    if (empty($username)) {
        $user_error = "Please enter a username";
    } else {
        $username_error = validate_username($username);
    }

    // Validate the email
    $email = $_POST['email'];
    if (empty($email)) {
        $email_error = "Please enter an email";
    } else {
        $email_error = validate_email($email);
    }

    // Validate the terms of service
    if (!isset($_POST['terms'])) {
        $terms_error = "You must accept the Terms of Service";
    }

    // Check if all validations passed
    if (empty($message_error) && empty($username_error) && empty($email_error) && empty($terms_error)) {
        $form_valid = true;
        // Process the form data or perform any other necessary actions
    }
}

?>

<form action="#" method="post">
    <div class="row mb-3 mt-3">
        <div class="col">
            <input type="text" class="form-control" placeholder="Enter Name" name="username">
            <small class="form-text text-danger"> <?php echo $user_error; ?></small>
        </div>
        <div class="col">
            <input type="text" class="form-control" placeholder="Enter email" name="email">
            <small class="form-text text-danger"> <?php echo $email_error; ?></small>
        </div>
    </div>
    <div class="mb-3">
        <textarea name="message" placeholder="Enter message" class="form-control"></textarea>
        <small class="form-text text-danger"> <?php echo $message_error; ?></small>
    </div>
    <div class="mb-3">
        <input type="checkbox" class="form-control-check" name="terms" id="terms" value="terms"> <label for="terms">I accept the Terms of Service</label>
        <small class="form-text text-danger"> <?php echo $terms_error; ?></small>
    </div>
    <div class="d-grid">
        <button type="submit" class="btn btn-primary">Submit</button>
    </div>
</form>

<hr>

<?php
if ($form_valid) :
?>
    <div class="card">
        <div class="card-header">
            <p><?php echo $username; ?></p>
            <p><?php echo $email; ?></p>
        </div>
        <div class="card-body">
            <p class="card-text"><?php echo $message; ?></p>
        </div>
    </div>
<?php
endif;
?>