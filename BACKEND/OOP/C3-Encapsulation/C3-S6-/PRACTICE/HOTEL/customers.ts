import { Address } from "./address";

export class Customer extends Address  {
    firstName:string;
    lastName:string;

    constructor(firstName:string, lastName:string,city:string, street:string, country:string){
        super(city,street,country);
        this.firstName=firstName;
        this.lastName=lastName;
    }
}