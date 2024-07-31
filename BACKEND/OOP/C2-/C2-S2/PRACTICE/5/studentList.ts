class listName {
    name:string;
    gender:string;
    studentName:student[]=[];

    constructor(name:string,gender:string){
        this.name=name;
        this.gender=gender;
    }
    getStudents(gotStudent: student){
        this.studentName.push(gotStudent);
    }
}

class student {
    age:number;
    constructor(age:number){
        this.age=age;
    }
}
let allStudent = new listName("soching","man");

let student1 = new student (12);
let student2 = new student (14);
let student3 = new student (16);
allStudent.getStudents(student1);
allStudent.getStudents(student2);
allStudent.getStudents(student3);

console.log(allStudent);

