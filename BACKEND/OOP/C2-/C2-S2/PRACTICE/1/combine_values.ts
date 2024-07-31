
class House {
    numberDoor: number;
    owner: string;
    trees: Tree[]=[];
    constructor(numberDoor: number, owner: string) {
        this.numberDoor = numberDoor;
        this.owner = owner;
    }
    setTree(tree:Tree){
        this.trees.push(tree);
    }
}


class Tree{
    size:number;
    constructor(size:number){
        this.size=size;
    }
}

let tree1 = new Tree(10);
let tree2 = new Tree(20);
let tree3 = new Tree(30);

let chinghouse = new House(12,"ching");
chinghouse.setTree(tree1);
chinghouse.setTree(tree2);
chinghouse.setTree(tree3);

console.log(chinghouse);

