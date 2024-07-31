class ABAbank{
    name:string;
    balance:number;
    constructor(parameter:string){
        this.name=parameter;
        this.balance=300;
    }
}

let Myaccount = new ABAbank('Ching CEO');
console.log(Myaccount.name);
