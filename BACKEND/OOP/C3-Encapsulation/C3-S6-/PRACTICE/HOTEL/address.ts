export class Address {
    private city:string;
    private street:string;
    private country:string;
    constructor(city:string, street:string, country:string){
        this.city=city;
        this.street=street;
        this.country=country;
    }
    setCity(city:string){
        return this.city;
    }
    setStreet(street:string){
        return this.street;
    }
    setCountry(country:string){
        return this.country;
    }
}