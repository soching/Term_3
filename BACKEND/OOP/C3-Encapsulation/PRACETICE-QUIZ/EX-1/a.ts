class Chair {
    chairId:number;
    house:House;
    constructor(chairId:number,house:House){
        this.chairId=chairId;
        this.house=house;

    }
}

class House {
    name:string;
    chairs:Chair[]=[];
    constructor(name:string){
        this.name=name;

    }
    addChairs(chairId:number):Chair{
        let newChair = new Chair(chairId,this)
        this.chairs.push(newChair);
        return newChair;
    }
}

let homeName = new House('Mr.jing');
homeName.addChairs(1);
homeName.addChairs(2);
console.log(homeName);


