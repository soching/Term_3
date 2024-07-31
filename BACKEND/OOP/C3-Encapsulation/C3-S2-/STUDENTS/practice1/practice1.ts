class Person {
    name:string;
    yearOfBirth:number;
    constructor(name:string,yearofbirth:number){
        this.name=name;
        this.yearOfBirth=yearofbirth;
    }
    getName():string{
        return this.name;
    }
    getYearOfBirth():number{
        return this.yearOfBirth;
    }
}

class Colendar {
    currectYear:number;
    constructor(currectyear:number){
        this.currectYear=currectyear;
    }
    getAge(person:Person):number{
        let age = this.currectYear - person.getYearOfBirth();
        return age;
    }
}
// let date:Date = new Date();
let person1 = new Person('soching',2004);
let person2 = new Person('chhaiya',2005);
let colendar = new Colendar(2024);
let agePerson1= colendar.getAge(person1)
let agePerson2= colendar.getAge(person2)
console.log(agePerson1)
console.log(agePerson2)