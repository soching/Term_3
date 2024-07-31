var House = /** @class */ (function () {
    function House(numberDoor, owner) {
        this.trees = [];
        this.numberDoor = numberDoor;
        this.owner = owner;
    }
    House.prototype.setTree = function (tree) {
        this.trees.push(tree);
    };
    return House;
}());
var Tree = /** @class */ (function () {
    function Tree(size) {
        this.size = size;
    }
    return Tree;
}());
var tree1 = new Tree(10);
var tree2 = new Tree(20);
var tree3 = new Tree(30);
var chinghouse = new House(12, "ching");
chinghouse.setTree(tree1);
chinghouse.setTree(tree2);
chinghouse.setTree(tree3);
console.log(chinghouse);
