<!DOCTYPE html>
<html lang="en">
<head>
<link rel="stylesheet" href="CSS/result.css">
</head>
<body>

    <div class="tamplate">
        <div class="pictures">
            <div class="halmet">
                <img src="img/a.png" width='100px'>
            </div>
            <div class="flower">
                <img src="img/helmet.png" width='200px'>
            </div>
        </div>
        <div class="name-school">
            <h1><?php echo "<h1>".$_GET['school'] ."</h1>";?></h1>
        </div>
        <div class="name-student">
            <hr>
            <div class="discription">
                <?php  echo "<p>My name is  ".$_GET['name']."</p>" ?>
            
                <?php
                if($_GET['gender']=='male'){
                        echo "<p>i'm a man<p>";
                    }else{
                        echo "<p>i'm a girl<p>";
                    }
                ?>
                <?php  echo "<p>and my was born".$_GET['birhtday']."</p>" ?>
                <?php  echo "<p>, I won number ".$_GET['number']."</p>" ?>
                <?php  echo "<p>, for exam  ".$_GET['choice']."</p>" ?>
            </div>

        <div class="parents">
        <div class="parents-name">
            <?php  echo "<li>My mother name is  ".$_GET['Mother']."</li>" ?>
            <?php  echo "<li>My father name is  ".$_GET['father']."</li>" ?>
        </div>
        <div class="parents-job">
            <?php  echo "<li> Job  ".$_GET['Motherjob']."</li>" ?>
            <?php  echo "<li> Job  ".$_GET['fatherjob']."</li>" ?>

        </div>
        </div>

        </div>
    </div>

    
</body>
</html>
