import { Batmobile } from "./batmobile";
import { Minivan } from "./minivan";
import { Tuctuc } from "./tuc tuc";
import { Vehicle } from "./vehicle";


export class VehicleConvoy {
  vehicles: Vehicle[];

  constructor() {
    this.vehicles = [];
  }

  addVehicle(vehicle: Vehicle) {
    this.vehicles.push(vehicle);
  }

  getMaxSpeed(): number {
    let maxSpeed = 0;
    for (const vehicle of this.vehicles) {
      const speed = vehicle.getSpeed();
      if (speed > maxSpeed) {
        maxSpeed = speed;
      }
    }
    return maxSpeed;
  }
}

let bat = new Batmobile('moto', 20, true);
let min = new Minivan('car', 10, 20, 60);
let tuc = new Tuctuc('tuctuc', 10, 50);

const convoy = new VehicleConvoy();
convoy.addVehicle(bat);
convoy.addVehicle(min);
convoy.addVehicle(tuc);

const maxSpeed = convoy.getMaxSpeed();
console.log("Max Speed:", maxSpeed);
