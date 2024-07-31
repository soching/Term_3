class retalHouse {
    homeNumber:number;
    owner:string;
    allTree: Tree[]=[];
    constructor(homeNumber:number,owner:string){
        this.homeNumber=homeNumber;
        this.owner=owner;
    }
    getTree(alloftree:Tree){
        this.allTree.push(alloftree);
    }
}

class Tree {
    size:number;
    constructor(size:number){
        this.size=size;
    }
}

let homeus = new retalHouse(11234,"Mr_Soching");
let tree1 = new Tree(10);
let tree2 = new Tree(20);
let tree3 = new Tree(30);

homeus.getTree(tree1);
homeus.getTree(tree2);
homeus.getTree(tree3);

console.log(homeus);


