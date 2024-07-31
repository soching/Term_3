import { DomElement } from "./DomElement";

let html = new DomElement('html');
let head = new DomElement('head');
let body = new DomElement('body');
let title = new DomElement('title');
let a = new DomElement('a');
let h1 = new DomElement('h1');

html.addChild(head);
html.addChild(body);


head.addChild(title);
head.setParent(html);
body.setParent(html);


body.addChild(a);
body.addChild(h1);

a.setParent(body)
h1.setParent(body)

// console.log(head);
// console.log(head);

console.log(html.isRoot());


