import { School,Classroom,Student} from "../SCHOOL";
//create two schools
let school1 = new School('Odarmeachey high school');
let school2 = new School('Dechosen samrong high school');

//create two classrooms
let classroom1 = school1.addClassroom('classroom HIM');
let classroom2 = school2.addClassroom('classroom RADY');

//create four students
let student1 = new Student('soching','chun');
let student2 = new Student('sophorn','chhaiya');
let student3 = new Student('chandy','moun');
let student4 = new Student('chen','suom');

//add students to classroom
classroom1.addStudent(student1);
classroom1.addStudent(student2);
classroom2.addStudent(student3);
classroom2.addStudent(student4);

console.log(classroom1.getNumberOfStudents());
console.log(classroom2.getNumberOfStudents());
