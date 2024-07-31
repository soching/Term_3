class Point {
    constructor(private x:number, private y: number){}
    public translateX(deltaX: number):number{
        return new Point(this.x + deltaX, this.y);
    }
    public clone():number{
        return new Point(this.x, this.y)
    }
}

let p1 = new Point(10,20)
let p2 = p1.clone();
let p3 = p1.translateX(50);