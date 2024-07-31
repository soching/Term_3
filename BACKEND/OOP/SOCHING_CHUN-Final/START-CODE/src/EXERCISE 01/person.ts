import { Student } from "./student";

export abstract class Person {
    private student: Student;
    constructor(protected name: string, protected age: number, student: Student){
        this.name = name;
        this.age = age;
        this.student = student;
    }
    getPerson(){}
}
