class Animal{
    constructor(protected name:string){}
}

class Dog extends Animal{
    constructor(name:string){
        super(name);
    }
    getName(){
        return this.name;
    }
}

let dog1 = new Dog("Hak Yon");
console.log(dog1.getName());