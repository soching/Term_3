import { shape } from "./shape";
export class circle extends shape{
    raduis: number;
    constructor(protected leftX: number, protected bottomY: number,raduis: number){
        super(leftX,bottomY);
        this.raduis= raduis;
    }
    getHeight(height: number): void {
        
    }
    getWidth(width: number): void {
        
    }
    getArea(area: number): void {
        
    }
}