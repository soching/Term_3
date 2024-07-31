import { shape } from "./shape";
export class ractangle extends shape{
    rightX: number;
    topY: number;
    constructor(protected leftX: number, protected bottomY: number, rightX: number,topY: number){
        super(leftX,bottomY);
        this.rightX= rightX;
        this.topY= topY;
    }
    getWidth(width: number): void {
        
    }
    getHeight(height: number): void {
        
    }
    getArea(area: number): void {
        
    }
}