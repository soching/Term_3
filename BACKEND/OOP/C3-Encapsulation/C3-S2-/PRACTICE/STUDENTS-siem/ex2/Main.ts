import { Student, Classroom, School } from './SCHOOL';
const school1 = new School("School A");
const school2 = new School("School B");

const classroom1 = school1.addClassroom("Classroom 1");
const classroom2 = school2.addClassroom("Classroom 2");


const student1 = new Student("Alice", "Smith");
const student2 = new Student("Bob", "Johnson");
const student3 = new Student("Charlie", "Brown");
const student4 = new Student("David", "Miller");

classroom1.addStudent(student1);
classroom1.addStudent(student2);
classroom2.addStudent(student3);
classroom2.addStudent(student4);

console.log("Number of students in Classroom 1:", classroom1.getNumberOfStudents());
console.log("Number of students in Classroom 2:", classroom2.getNumberOfStudents());