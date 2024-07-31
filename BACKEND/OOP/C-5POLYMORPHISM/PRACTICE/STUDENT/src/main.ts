// import { shape } from "./shape";
import { circle } from "./circle";
import { square } from "./square";
import { ractangle } from "./ractangle";

let circle1 = new circle(4,6,3);
let square1 = new square (2,3,5)
let ractangle1 = new ractangle(1,2,3,4)

circle1.getHeight(23);
square1.getWidth(20);
ractangle1.getArea(100);

console.log(circle1);
console.log(square1);
console.log(ractangle1);
