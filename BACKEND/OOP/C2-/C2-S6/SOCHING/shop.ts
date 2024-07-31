class Store {
    name:string;
    Products:Product[]=[];
    Customers:Customer[]=[];
    constructor(name:string){
        this.name=name;
    }
    getProducts(addProducts:Product){
        this.Products.push(addProducts);
    }
    getCustomers(firstName:string,lastName:string){
        let addCustomers = new Customer(firstName,lastName);
        this.Customers.push(addCustomers);
    }
    //get product in stores less than 
    getProductLessthan(price: number){
        let productPrice: Product[] = [];
        for(let values of this.Products){
            if(values.price < price){
                productPrice.push(values);
            }   
        }
        return productPrice;  
    }
    //get all feetback of any product
    getFeedbackContaining(){
        for(let products of this.Products){
            for(let comments of products.feetbacks ){
                console.log(comments.comment);
                
            }
        }
    }
    
}
class Product {
    name:string;
    price:number;
    feetbacks:Feetback[]=[];
    constructor(name:string,price:number){
        this.name=name;
        this.price=price;
    }
    getFeetbacks(addFeetback:Feetback){
        this.feetbacks.push(addFeetback);
    }
}

class Feetback {
    comment:string;
    evaloation:number;
    // setcustomers:Customer;
    constructor(comment:string,evaloation:number){
        this.comment=comment;
        this.evaloation=evaloation;
    }
    // getCustomers(customer:Customer){
    //     this.setcustomers=customer;
    // }
}

class Customer {
    firstName:string;
    lastName:string;
    constructor(firstName:string,lastName:string){
        this.firstName=firstName;
        this.lastName=lastName;
    }
}
//object for add product to store
let stores = new Store('drink');
let product1 = new Product('sting',80);
stores.getProducts(product1);
// console.log(stores);
//object for add feetback to product
let products = new Product('pizza',5);
let feetback1 = new Feetback('your pizza is good',40);
product1.getFeetbacks(feetback1);
// console.log(products);

//object add customers to store
let customer1 = new Customer('soching','chun');
stores.getCustomers(customer1.firstName,customer1.lastName);

stores.getFeedbackContaining();




