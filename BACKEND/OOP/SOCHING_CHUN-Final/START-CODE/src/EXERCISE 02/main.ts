import { MenuItem } from "./menuitem";
import { Customers } from "./customers";
import { Orders } from "./order";
import { Restaurant } from "./restaurant";

let menuitem1 = new MenuItem('Coca','this is for drink','5$');
let customer1 = new Customers(110,'soching');
let order1 = new Orders('5$',customer1);
let restaurant1 = new Restaurant(menuitem1,order1)

console.log(restaurant1);
