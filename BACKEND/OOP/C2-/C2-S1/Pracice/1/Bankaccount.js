var ABAbank = /** @class */ (function () {
    function ABAbank(parameter) {
        this.name = parameter;
        this.balance = 300;
    }
    return ABAbank;
}());
var Myaccount = new ABAbank('Ching CEO');
console.log(Myaccount.name);
