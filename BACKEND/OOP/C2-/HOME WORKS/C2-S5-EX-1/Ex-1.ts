class Trip {
    busName:string;
    addCustomer:Customer[]=[];
    addAddress:Address[]=[];
    constructor(busName:string){
        this.busName=busName;
    }
    getCustomer(firstName:string,lastName:string){
        let addCustomers = new Customer(firstName,lastName);
        this.addCustomer.push(addCustomers);
    }
    getAddress(city:string,street:string){
        let addAdress = new Address(city,street);
        this.addAddress.push(addAdress);
    }
}

class Customer {
    firstName:string;
    lastName:string;
    address: Address[]=[];
    constructor(firstName:string,lastName:string){
        this.firstName=firstName;
        this.lastName=lastName;
    }
    getAddress(city:string,street:string){
        let add = new Address(city,street);
        this.address.push(add);
    }
}

class Address {
    city:string;
    street:string;
    constructor(city:string,street:string){
        this.city=city;
        this.street=street;
    }
}

let customerName1 = new Customer('soching','chun');
let customerName2 = new Customer('soching','chhun');
let customerName3 = new Customer('chhaiya','sophorn');

let Address1 = new Address("Ordormeanchey","271omc");
let Address2 = new Address("Bomteaymeanchey","371bmc");
let Address3 = new Address("Batambong","454btb");


customerName1.getAddress(Address1.city,Address1.street);
customerName1.getAddress(Address2.city,Address2.street);
customerName3.getAddress(Address3.city,Address3.street);

let Trip1 = new Trip('Vireak Bontham bus');
Trip1.getAddress(Address1.city,Address1.street);
Trip1.getCustomer(customerName1.firstName,customerName1.lastName);
console.log(Trip1);

let Trip2 = new Trip('JNT bus');
Trip2.getAddress(Address2.city,Address2.street);
Trip2.getCustomer(customerName2.firstName,customerName2.lastName);
console.log(Trip2);

let Trip3 = new Trip('J7 bus');
Trip3.getAddress(Address3.city,Address3.street);
Trip3.getCustomer(customerName3.firstName,customerName3.lastName);
console.log(Trip3);
