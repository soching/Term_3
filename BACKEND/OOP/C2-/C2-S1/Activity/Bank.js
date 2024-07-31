//isn't work but it is best concept
var BankAccount = /** @class */ (function () {
    function BankAccount(parameter) {
        this.name = parameter;
        this.balance = 300;
    }
    BankAccount.prototype.getname = function () {
        return (this.name);
    };
    return BankAccount;
}());
var person = new BankAccount("Ching");
console.log(person.getname);
//How 2
// class BankAccount{
//     name:string;
//     balance:number;
//     constructor(parameter:string){
//         this.name = parameter;
//         this.balance = 300;
//     }
// }
// let person=new BankAccount("Ching")
// console.log(person.name);
