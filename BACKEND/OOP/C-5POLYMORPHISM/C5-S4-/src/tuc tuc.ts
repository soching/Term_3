import { Vehicle } from "./vehicle";

export class Tuctuc extends Vehicle{
    numberOfCustomrs: number;
    speedDefault:number;
    constructor(plateId:string, wieght:number, numberOfCustomers:number){
        super(plateId, wieght);
        this.numberOfCustomrs=numberOfCustomers;
        this.speedDefault=130;
    }
    getSpeedTucTuc(){
        for(let i=0; i<this.numberOfCustomrs; i++){
            this.speedDefault-=5;
        }
    }
    getSpeed(): void {}
}