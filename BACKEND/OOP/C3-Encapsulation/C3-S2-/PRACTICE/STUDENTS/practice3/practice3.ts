//create domelements
class DomElement{
    name:string;
    children:DomElement[];
    parents:DomElement;

    constructor(name:string){
        this.name=name;
        this.children=[];
    }
    getName():string{
        return this.name;
    }
    isRoot():boolean{
        return this.parents === undefined;
    }
    addChild(child:DomElement){
        child.setParent(this)
        this.children.push(child);

    }
    setParent(parent:DomElement){
        this.parents=parent;
    }
}
//create objects

let html = new DomElement('html');
let head = new DomElement('head');
let title = new DomElement('tile');
let body = new DomElement('body');
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
