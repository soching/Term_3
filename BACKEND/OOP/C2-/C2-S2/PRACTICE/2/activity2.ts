class house {
    numberHouse:number;
    owner:string;
    room:rooms[]=[];
    door:doors[]=[];
    constructor(numberHouse:number,owner:string){
        this.numberHouse=numberHouse;
        this.owner=owner;
    }
    getRooms(rooms:rooms){
        this.room.push(rooms);
    }
    getDoors(doors:doors){
        this.door.push(doors);
    }
}

class doors {
    count:number;
    constructor(count:number){
        this.count=count;
    }
}

class rooms {
    roomNumber:number;
    constructor(roomNumber:number){
        this.roomNumber=roomNumber;
    }
}

let room1 = new rooms(1);
let room2 = new rooms(2);
let door1 = new doors(23);

let ching = new house("hi",2)