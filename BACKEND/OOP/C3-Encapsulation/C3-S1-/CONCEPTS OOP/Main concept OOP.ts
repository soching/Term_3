// Encapsulation(ការវេចខ្ចប់): 
//   បណ្តុំនៃdata (attributes) និង method (function) ដែលដំណើរការលើ data ទៅជាឯកតាតែមួយ (class)។ Ex: public, private, protected
class Car {
    private _speed: number;
    constructor(speed: number) {
        this._speed = speed;
    }
    accelerate(increment: number) {
        this._speed += increment;
    }
    get speed() {
        return this._speed;
    }
}
const myCar = new Car(50);
console.log(myCar.speed); // Output: 50
myCar.accelerate(20);
console.log(myCar.speed); // Output: 70



// Abstraction(អរូបី): 
//      concept នៃការលាក់ព័ត៌មានលម្អិតនៃការអនុវត្តស្មុគស្មាញ និងបង្ហាញតែ properties ចាំបាច់នៃ object មួយ។
abstract class Shape {
    abstract calculateArea(): number;
}
class Circle extends Shape {
    constructor(private radius: number) {
        super(); // Always used in abstractions
    }
    calculateArea(): number {
        return Math.PI * this.radius ** 2;
    }
}
const circle = new Circle(5);
console.log(circle.calculateArea()); // Output: 78.54



// Inheritance(មរតក)
//      របៀបដែល class មួយ (subclass) អាចទទួល inherit propoties និង method ពី other classes (superclass) ។
class Animal {
    makeSound() {
        console.log("Some generic sound");
    }
}
class Dog extends Animal {
    makeSound() {
        console.log("Woof woof!");
    }
}
const dog = new Dog();
dog.makeSound(); // Output: Woof woof!



// Polymorphism
//      Polymorphism គឺជាសមត្ថភាពក្នុងការបង្កើត class ដែលមានទម្រង់ច្រើនជាងមួយ។ ឬនិយាយម្យ៉ាងទៀត class មានវិធីសាស្រ្តដូចគ្នា ប៉ុន្តែការអនុវត្តខុសគ្នា។
function makeAnimalSound(animal: Animal) {
    animal.makeSound();
}
const genericAnimal = new Animal();
const specificDog = new Dog();
makeAnimalSound(genericAnimal); // Output: Some generic sound
makeAnimalSound(specificDog); // Output: Woof woof!+--------------