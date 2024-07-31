const FRUIT_FILE = "fruits.json";

// ---------- DEPENDANCIES ----------------------------------------------------------

/**
 * TODO
 * Import the library fs to be able to read/write files
 */

// ---------- VARIABLES ----------------------------------------------------------



/**
 * TODO : manage a list of fruits
 *
 * Each fruit is an OBJECT composed of:
 * - the name of the fruit  (string)
 * - the color of the fruit  (string)
 * - the price of the fruit  (integer)
 */


 let fruits = [
  {name: "banana",color:"red",price:200},
  {name: "apple",color:"red",price:20},
  {name: "mango",color:"red",price:202}
 ];

// ---------- FUNCTIONS ----------------------------------------------------------

/**
 * Add a new fruit
 * @param fruit name
 * @param fruit color
 * @param fruit price
 */
function addFruit(fruitName, fruitColor, fruitPrice) {
   // TODO : complete this function
  let fruit ={name:fruitName,color:fruitColor,price:fruitPrice}
  fruits.push(fruit);
  console.log("fruit added:  " + fruitName);
}

function getColorOf(fruitName) {
  for (let i = 0; i < fruits.length; i++) {
    if (fruits[i].name === fruitName) {
      return fruits[i].color;
    }
  }
  return null;
}


function getPriceOf(fruitName) {
   // TODO : complete this function
   for( let i = 0; i<fruits.length; i++){
    if(fruits[i].name===fruitName){
      return fruits[i].price;
    }
   }
   
  return null;
}

function listFruits() {
  let toDisplay = "Here are the fruits:\n";
   // TODO : complete this function
   for (let i = 0; i < fruits.length; i++) {
    toDisplay += `Name: ${fruits[i].name}, Color: ${fruits[i].color}, Price: ${fruits[i].price}\n`;
  }
  console.log(toDisplay);
}

function save() {
   // TODO : complete this function to save list of fruit to file
  console.log("save list of fruit to file")
   
}

function load() {
  // TODO : complete this function to get list of fruit from file
  console.log("list of frut")

}
