import { Person } from "./person";
import { Student } from "./student";
import { School } from "./school";
import { Class } from "./class";

let student1 = new Student(882653558);
let class1 = new Class('WEBA',2);
let school1 = new School('PNC');

let addstudent = class1.addStudent(student1);
console.log(addstudent);

let addclass = school1.addClass(class1);
console.log(addclass);




