class ClassA {
   name:string;
   address:string;
   constructor(name:string,address:string){
    this.name=name;
    this.address=address;
   }
}

class ClassB extends ClassA {
    year:number;
    constructor(name:string,address:string,year:number){
        super(name,address);
        this.year=year;
    }

}
let jing = new ClassB('soching','pp',10);
console.log(jing);




