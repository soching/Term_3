import { Customers } from "./customers";
export class Orders{
    orderItems:Orders[]=[];
    totalPrice: string;
    customers: Customers;
    constructor(totalPrice: string, customer: Customers){
        this.totalPrice = totalPrice;
        this.customers = customer;
    }
    addOrder(order:Orders ){
        this.orderItems.push(order);
    }
}