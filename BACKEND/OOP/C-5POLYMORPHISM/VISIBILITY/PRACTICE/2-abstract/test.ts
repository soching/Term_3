abstract class Animals {
    constructor(protected name: string){}
    abstract playSound ():void;
} 

class Cat extends Animals{
    constructor(name: string){
        super(name);
    }
    playSound(): void {
        console.log('aw aw aw!');
        
    }
}