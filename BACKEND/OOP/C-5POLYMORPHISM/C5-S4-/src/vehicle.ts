export abstract class Vehicle {
    constructor(private plateId: string, private wieght: number) {}
    abstract getSpeed(): void;
} 