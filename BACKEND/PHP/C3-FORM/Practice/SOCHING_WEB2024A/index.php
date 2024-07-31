<!-- iclode header -->
<?php
require_once("Template/header.php");
?>

<form action="result.php" method="get">
    <label>School name</label>
    <input type="text" name="school"></input>

    <label>Your name</label>
    <input type="text" name="name"></input>

    <label>Your birhtday</label>
    <input type="text" name="birhtday"></input>

    <label>Number</label>
    <input type="text" name="number"></input>

    <label for="selectskills">Your skills</label>
    <select name ="choice" id="skills">
      <option value="Phython">Phython</option>
      <option value="Java scrip">Java scrip</option>
      <option value="Figma">Figma</option>
      <option value="Database">Data base</option>
      <option value="PHP">PHP</option>
    </select>

    <label>Mother name</label>
    <input type="text" name="Mother"></input>

    <label>Mother job</label>
    <input type="text" name="Motherjob"></input>

    <label>Father name</label>
    <input type="text" name="father"></input>

    <label>Father job</label>
    <input type="text" name="fatherjob"></input>

    <label>Your gender</label>
    <div>
       <label>
          <input type="radio" value="female" name="gender" />Female
       </label>

       <label>
          <input type="radio" value="male" name="gender"/>Male
       </label>
    </div>

    <button type="submit">Submit</button>

</form>

<!-- iclode footer -->
<?php
require_once("Template/footer.php");
?>




