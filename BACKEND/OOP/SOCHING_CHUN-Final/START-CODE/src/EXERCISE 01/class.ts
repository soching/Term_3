import { Student } from "./student";

export class Class {
    private name: string;
    private classMonitors:number;
    private students:Student[]=[];
    constructor(name: string, classMornitors: number){
        this.name = name;
        this.classMonitors = classMornitors;
    }
    addStudent(student: Student){
        this.students.push(student);
    }
}