import { Person } from "./Person";

export class Employee extends Person {
    constructor(name: string, address: string, dateOfBirth: string, 
        private salary: number, private yearArrival: number) {
        super(name, address, dateOfBirth);
        this.salary = salary;
        this.yearArrival = yearArrival;
    }
}