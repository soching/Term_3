import { Address } from "./address";
export class Hotel extends Address {
    name:string;
    constructor(name:string,city:string, street:string, country:string ){
        super(city,street,country)
        this.name=name;
    }
}