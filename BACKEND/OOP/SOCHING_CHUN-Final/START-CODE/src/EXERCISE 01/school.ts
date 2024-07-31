import { Class } from "./class";

export class School {
    name: string;
    private classes: Class[]=[];
    constructor(name: string){
        this.name = name;
    }
    addClass(className: Class){
        this.classes.push(className);
    }
}