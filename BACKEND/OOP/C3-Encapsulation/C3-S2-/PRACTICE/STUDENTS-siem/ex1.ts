class Person {
    constructor(private name: string, private birthYear: number){
        this.name = name;
        this.birthYear = birthYear;
    }
    
    getName(): string {
        return this.name;
    }

    getBirthYear(): number {
        return this.birthYear;
    }
}

class Calendar {
    constructor(private currentYear: number){
        this.currentYear = currentYear;
    }

    getAge(person: Person): number {
        const age = this.currentYear - person.getBirthYear();
        return age;
    }
}

// let date: Date = new Date();  
// console.log(date);

let siem = new Person("siem",1995);
let caleda = new Calendar(2030);
let age = caleda.getAge(siem);
console.log(age);



