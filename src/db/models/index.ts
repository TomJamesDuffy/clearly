import { DataTypes } from "sequelize";

import ProjectFactory from "./Project";
import TripFactory from "./Trip";
import VehicleFactory from "./Vehicle";
import CargoFactory from "./Cargo";
import TripCargoFactory from "./TripCargo";

import sequelize from "../../../sequelize.config";

const Project = ProjectFactory(sequelize, DataTypes);
const Trip = TripFactory(sequelize, DataTypes);
const Vehicle = VehicleFactory(sequelize, DataTypes);
const Cargo = CargoFactory(sequelize, DataTypes);
const TripCargo = TripCargoFactory(sequelize, DataTypes);

export type Models = {
  Project: typeof Project;
  Trip: typeof Trip;
  Vehicle: typeof Vehicle;
  Cargo: typeof Cargo;
  TripCargo: typeof TripCargo;
};

export const models: Models = {
  Project,
  Trip,
  Vehicle,
  Cargo,
  TripCargo,
};

// This associates models if relationships exist
Object.keys(models).forEach((modelName) => {
  const model = models[modelName as keyof typeof models];
  if (model.associate) {
    model.associate(models);
  }
});

export default models;
