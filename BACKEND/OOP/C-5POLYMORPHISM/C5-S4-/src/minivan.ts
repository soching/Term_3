import { Vehicle } from "./vehicle";

export class Minivan extends Vehicle{
    numberOfCustomers: number;
    numberOfLanguages: number;
    private speedDefault: number;
    constructor(plateId:string, wieght:number, numberOfCustomers:number, numberOfLanguages:number){
        super(plateId, wieght);
        this.numberOfCustomers = numberOfCustomers;
        this.numberOfLanguages = numberOfLanguages;
        this.speedDefault=130;
    }
    getNumberOfPassengers(){
        for(let i=0; i< this.numberOfCustomers; i++){
            this.speedDefault-=10;
        }
        for(let i=0; i<this.numberOfLanguages; i++){
            this.speedDefault-=5;
        }
    }
    getSpeed(){}
}