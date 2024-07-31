import { Employee } from "./Employee";

export class Doctor extends Employee {
    constructor(name: string, address: string, dateOfBirth: string,
        salary: number, yearArrival: number, private medicalSpecialties: string[]) {
        super(name, address, dateOfBirth, salary, yearArrival);
        this.medicalSpecialties = medicalSpecialties;
    }
}