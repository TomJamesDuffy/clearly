import { BaseServiceClass } from "../../services/base";
import { VehicleInstance, VehicleStatic } from "../../db/models/Vehicle";

export class VehicleServiceClass extends BaseServiceClass<VehicleInstance> {
  constructor(model: VehicleStatic) {
    super(model);
  }
}
