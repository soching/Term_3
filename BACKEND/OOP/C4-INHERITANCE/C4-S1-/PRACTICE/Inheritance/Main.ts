import { Doctor } from "./Doctor";
import { Employee } from "./Employee";
import { Person } from "./Person";


let persion1 = new Person("Righ", "Takoe", "03-07-2020");
let employee1 = new Employee("Sanok", "RatKiri", "03-02-3033", 450, 1);
let doctor1 = new Doctor("Tiv KH", "America", "01-01-2002", 500, 2, ["para", "padadol"]);

console.log(persion1.getName());
console.log(employee1.getName());
console.log(doctor1.getName());

console.log(persion1.getAddress());
console.log(employee1.getAddress());
console.log(doctor1.getAddress());




