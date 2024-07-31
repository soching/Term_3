class country {
    name:string;
    population:number;
    caption:string;
    currency:string;
    constructor(name:string,population:number,caption:string,currency:string){
        this.name=name;
        this.population=population;
        this.caption=caption;
        this.currency=currency;
    }
    //crete function
    getInfo():string{
        return "Welcome to " + this.name + "with population" + this.population.toString() + "million" + "capital is" + this.caption + "for corrency is" + this.currency +"!";
    }
}
//create object
let resultFrance = new country('France',70,'Paris','Euro');
let resultCambodia = new country('Cambodia',17,'Phnom Penh','Riel');
let resultUK = new country('UK',80,'London','Pound');

console.log(resultFrance.getInfo());

