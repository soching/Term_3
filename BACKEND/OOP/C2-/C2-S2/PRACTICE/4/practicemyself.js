var retalHouse = /** @class */ (function () {
    function retalHouse(homeNumber, owner) {
        this.allTree = [];
        this.homeNumber = homeNumber;
        this.owner = owner;
    }
    retalHouse.prototype.getTree = function (alloftree) {
        this.allTree.push(alloftree);
    };
    return retalHouse;
}());
var Tree = /** @class */ (function () {
    function Tree(size) {
        this.size = size;
    }
    return Tree;
}());
var homeus = new retalHouse(11234, "Mr_Soching");
var tree1 = new Tree(10);
var tree2 = new Tree(20);
var tree3 = new Tree(30);
homeus.getTree(tree1);
homeus.getTree(tree2);
homeus.getTree(tree3);
console.log(homeus);
