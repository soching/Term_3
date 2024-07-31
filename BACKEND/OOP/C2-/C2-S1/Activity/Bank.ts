//isn't work but it is best concept
// class BankAccount{
//     name:string;
//     balance:number;
//     constructor(parameter:string){
//         this.name = parameter;
//         this.balance = 300;
//     }
//     getname():string{
//         return (this.name)
//     }
// }
// let person=new BankAccount("Ching")
// console.log(person.getname);


//How 2
class BankAccount{
    name:string;
    balance:number;
    constructor(parameter:string){
        this.name = parameter;
        this.balance = 300;
    }
}
let person=new BankAccount("Ching")
console.log(person.name);