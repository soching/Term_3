<?php
// database connection
$db= new PDO ("mysql:host=localhost;dbname=student_db", "root", "");
/**
 * Get all students from the database
 
 * @return array of students 
 */
function getStudents()
{
    global $db;
    $statement=$db->prepare('SELECT * FROM students ORDER BY id DESC');
    $statement->execute();
    return $statement->fetchAll();
}

/**
 * Get single student from the database
 * @param integer $id : the student id
 
 * @return associative_array: the student related to given id
 */
function getStudentById($id)
{
    global $db;
    $statement=$db->prepare('SELECT * FROM students WHERE id = :id ');
    $statement->execute([
        ':id'=>$id,
    ]);
    return $statement->fetch();

}

/**
 * Remove single student from the database
 * @param integer $id : the id of the student to delete
 
 * @return boolean: true if deletion was successful, false otherwise
 */
function deleteStudent($id)
{
    global $db;
    $statement=$db->prepare('DELETE  FROM students WHERE id = :id ');
    $statement->execute([
        ':id'=>$id,
    ]);
    return $statement->rowCount() > 0;
}

/**
 * Update single student from the database
 * @param integer $id :  		the id of the student to update
 * @param string $name :  		the student name
 * @param integer $age :  		the age of the student
 * @param string $province :  	the student's province

 * @return boolean: true if deletion was successful, false otherwise
 */
function updateStudent($id, $name, $age, $province)
{
    global $db;
    $statement=$db->prepare("UPDATE students SET name=:name, age=:age, province=:province WHERE id = :id");
    $statement->execute([
        ":name"=>$name,
        ":age"=>$age,
        ":province"=>$province,
        ":id"=>$id
    ]);
}

/**
 * Create single student from the database
 * @param string $name :  		the student name
 * @param integer $age :  		the age of the student
 * @param string $province :  	the student's province

 * @return boolean: true if create was successful, false otherwise */
function createStudent($name, $age, $province)
{
    global $db;
    $statement=$db->prepare('INSERT INTO students (name,age,province) VALUES (:name,:age,:province)');
    $statement->execute([
        ':name'=>$name,
        ':age'=>$age,
        ':province'=>$province
    ]);
    return $statement->rowCount() > 0;
}




