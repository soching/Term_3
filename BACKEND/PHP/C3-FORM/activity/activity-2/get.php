<?php
require_once('templates/header.php');

echo "<ul>";
echo "<li> my name is : ".$_GET['name']."</li>";
echo "<li> my hobby is : ".$_GET['hobby']."</li>";

if($_GET['gender']=='male'){
echo "<li> you are a boy</li>";
}else{
echo "<li> you are a girl</li>";
}


//how2
// $gender=isset($_GET['gender'])=='male'?"boy":"girl";
// echo "you are a ".$gender;

echo "</ul>";


require_once('templates/footer.php');
