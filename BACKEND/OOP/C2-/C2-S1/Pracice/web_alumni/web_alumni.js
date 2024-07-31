var computeSararies = /** @class */ (function () {
    function computeSararies(VueJs, NodeJs, oop) {
        this.VueJs = VueJs;
        this.Nodejs = NodeJs;
        this.OOp = oop;
    }
    //create function
    computeSararies.prototype.List = function () {
        if (this.VueJs <= 1 && this.Nodejs <= 1 && this.OOp == "No") {
            return 'hg ban salary te 250$ te ah tork';
        }
    };
    return computeSararies;
}());
//create object
var listAlumni = new computeSararies(1, 1, "No");
console.log(listAlumni.List());
