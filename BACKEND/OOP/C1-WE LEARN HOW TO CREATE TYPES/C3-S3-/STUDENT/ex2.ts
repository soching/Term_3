 
//  INSTRUCTIONS

// 	We want to manage customer food orders in a restaurant:

//   - An Order has:
// 			- the customer name (string)
// 			- the date of the order (string)
// 			- the list of food orders (array of FoodOrder)


//   - An FoodOrder has:
// 			- the food name (string)
// 			- the price (number)
type FoodOrder = {
	food: string;
	price: number;
  };
  
  type Order = {
	customer: string;
	date: string;
	foodOrders: FoodOrder[];
  };
// 	Q1 : Create the 2 types.

// 	Q2 : Create the following orders :
// 				- customer = "HIM THE CRAZY"
// 				- date = "SEP 9"
// 				- food orders:
// 						- food : "french fries", price : 12
// 						- food  : "cambodian fries", price : 1
// 						- food : "ice scream", price : 4
let Order1:Order ={
	customer :"HIM THE CRAZY",
	date : "SEP 9",
	foodOrders:[
	{food : "french fries", price : 12},
	{food  : "cambodian fries", price : 1},
	{food : "ice scream", price : 4}
	]
				
}

// 				- customer = "RONAN THE CRAZY"
// 				- date = "SEP 10"
// 				- food orders:
// 						- food : "coca", price : 12
// 						- food  : "caco", price : 1
// 						- food  : "snake", price : 14
// 						- food  : "chiken", price : 11
let Order2:Order ={
	customer :"HIM THE CRAZY",
	date : "SEP 10",
	foodOrders:[
	{food : "coca", price : 12},
	{food : "coca", price : 1},
	{food : "snake", price : 14},
	{food : "chiken", price : 11},
	]
				
}						
						
// 	Q3 : Create a function that take as parameter a Order, and return the total price of the order
// 						getTotalPrice(order : Order) : number
function getTotalPrice(order: Order): number {
	let totalPrice = 0;
	for (let foodOrder of order.foodOrders) {
	  totalPrice += foodOrder.price;
	}
	return totalPrice;	
  }						
						
// 	Q4 : Create a function that take as parameter a list of Order, and return which order is the most expensive
  
//            getMostExpensive(orders : Order[]) : Order
function getMostExpensive(orders: Order[]): Order {
	let mostExpensiveOrder: Order | null = null;
	let maxPrice = 0;
	for (const order of orders) {
	  const totalPrice = getTotalPrice(order);
	  if (totalPrice > maxPrice) {
		maxPrice = totalPrice;
		mostExpensiveOrder = order;
	  }
	}
	if (mostExpensiveOrder) {
	  return mostExpensiveOrder;
	} else {
	  throw new Error("No orders found.");
	}
  }
// */
 