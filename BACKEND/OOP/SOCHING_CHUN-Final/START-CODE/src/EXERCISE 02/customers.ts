import { Orders } from "./order";

export class Customers {
    private orders: Orders[]=[];
   constructor(private id: number, private name:string){
    this.id = id;
    this.name = name;
   }
   addOrder(ordersName:Orders):void{
    this.orders.push(ordersName);
   }
}