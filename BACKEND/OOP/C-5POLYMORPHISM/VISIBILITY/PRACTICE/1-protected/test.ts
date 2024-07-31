class Person {
    //the syntax readonly is used to get values from private by without create the function
    constructor(private readonly name: string, protected address: string) {}
}

class Student extends Person {
    constructor(name: string, address: string) {
        super(name, address);
    }
}