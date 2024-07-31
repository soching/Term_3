import { Teacher } from "./Teacher";
import { Students } from "./Students";

export class Room {
    table:number;
    teacherName:string;
    teacherClass:Teacher[]=[];
    studentClass:Students[]=[];
    constructor(table:number,teacherName:string){
        this.table=table;
        this.teacherName=teacherName;
    }
    getAllTearchers(name:string):void{  
        let Teachers = new Teacher(name); 
        this.teacherClass.push(Teachers);
    } 
    getAllStudents(tableName:string,roomName:string):void{
        let allStudents = new Students(tableName,roomName);
        this.studentClass.push(allStudents);
    }
}





