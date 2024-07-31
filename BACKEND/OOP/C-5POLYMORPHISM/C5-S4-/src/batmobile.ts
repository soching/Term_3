import { Vehicle } from "./vehicle";
 
export class Batmobile extends Vehicle {
  isbatmanhere: boolean;
  constructor(plateId: string, weight: number, isbatmanhere: boolean) {
    super(plateId, weight);
    this.isbatmanhere = isbatmanhere;
  }
  getSpeed() {
    if(this.isbatmanhere){
        return 500;
    }else{
        return 110;
    }
  }
}