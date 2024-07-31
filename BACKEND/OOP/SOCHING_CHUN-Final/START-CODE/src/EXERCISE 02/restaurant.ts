import { MenuItem } from "./menuitem";
import { Orders } from "./order";
import { Customers } from "./customers";

export class Restaurant {
    menuitems: MenuItem;
    orders: Orders;
    additems: MenuItem[]=[];
    constructor(private menuitem: MenuItem, private order: Orders){
        this.menuitems= menuitem;
        this.orders= order;
    }
    addItems(items: MenuItem):void{
        this.additems.push(items)
    }
    placeOrder(customer:Customers, items: MenuItem[]):void{
        
    }
    getOrderByCustomer(customer:Customers){

    }
}