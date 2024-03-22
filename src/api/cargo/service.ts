import { BaseServiceClass } from "../../services/base";
import { CargoInstance, CargoStatic } from "../../db/models/Cargo";

export class CargoServiceClass extends BaseServiceClass<CargoInstance> {
  constructor(model: CargoStatic) {
    super(model);
  }
}
