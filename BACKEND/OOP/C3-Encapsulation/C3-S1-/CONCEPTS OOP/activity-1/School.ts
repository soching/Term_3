import {Room} from './Room';
import {Students} from './Students';
import {Teacher} from './Teacher';

class School {
    room:number;
    students:number;
    teachers:number;
    rooms: Room[]=[];
    constructor(room:number,students:number,teachers:number){
        this.room=room;
        this.students=students;
        this.teachers=teachers;
    }
}

let room1= new Room(10,"Mengheang");
let room2= new Room(10,"Him");
let room3= new Room(10,"Yon");
room1.getAllTearchers(room1.table,room1.teacherName);