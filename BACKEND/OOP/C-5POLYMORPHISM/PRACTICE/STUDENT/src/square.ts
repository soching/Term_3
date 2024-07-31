import { shape } from "./shape";
export class square extends shape{
    size: number;
    constructor(protected leftX: number, protected bottomY: number, size: number){
        super(leftX,bottomY);
        this.size = size;
    }
    getWidth(width: number): void {
        
    }
    getHeight(height: number): void {
        
    }
    getArea(area: number): void {
        
    }  
}