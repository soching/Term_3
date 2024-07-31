var listName = /** @class */ (function () {
    function listName(name, gender) {
        this.studentName = [];
        this.name = name;
        this.gender = gender;
    }
    listName.prototype.getStudents = function (gotStudent) {
        this.studentName.push(gotStudent);
    };
    return listName;
}());
var student = /** @class */ (function () {
    function student(age) {
        this.age = age;
    }
    return student;
}());
var allStudent = new listName("soching", "man");
var student1 = new student(12);
var student2 = new student(14);
var student3 = new student(16);
allStudent.getStudents(student1);
allStudent.getStudents(student2);
allStudent.getStudents(student3);
console.log(allStudent);
