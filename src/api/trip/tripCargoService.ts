import { Cargo, Trip } from "../../../__generated__/graphql-types";
import { BaseServiceClass } from "../../services/base";
import { TripCargoInstance, TripCargoStatic } from "../../db/models/TripCargo";
import { CargoServiceClass } from "../cargo/service";
import { TripServiceClass } from "../trip/service";

import { findByFieldId } from "./utils/findByFieldId";

export class TripCargoServiceClass extends BaseServiceClass<TripCargoInstance> {
  cargoService: CargoServiceClass;
  tripService: TripServiceClass;

  constructor(
    model: TripCargoStatic,
    cargoService: CargoServiceClass,
    tripService: TripServiceClass
  ) {
    super(model);
    this.cargoService = cargoService;
    this.tripService = tripService;
  }

  async findCargosByTripId(tripId: string): Promise<Cargo[]> {
    return findByFieldId(
      this.model,
      "tripId",
      "cargoId",
      tripId,
      this.cargoService
    ) as Promise<Cargo[]>;
  }

  async findTripsByCargoId(cargoId: string): Promise<Trip[]> {
    return findByFieldId(
      this.model,
      "cargoId",
      "tripId",
      cargoId,
      this.tripService
    ) as Promise<Trip[]>;
  }
}
