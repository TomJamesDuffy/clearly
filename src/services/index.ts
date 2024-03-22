import { DataTypes } from "sequelize";
import sequelize from "../../sequelize.config";

import { ProjectServiceClass } from "../api/projects/service";
import { TripServiceClass } from "../api/trip/service";
import { TripCargoServiceClass } from "../api/trip/tripCargoservice";
import { CargoServiceClass } from "../api/cargo/service";
import { VehicleServiceClass } from "../api/vehicle/service";

import ProjectModel from "../db/models/Project";
import TripModel from "../db/models/Trip";
import TripCargoModel from "../db/models/TripCargo";
import CargoModel from "../db/models/Cargo";
import VehicleModel from "../db/models/Vehicle";

const Project = ProjectModel(sequelize, DataTypes);
const Trip = TripModel(sequelize, DataTypes);
const Cargo = CargoModel(sequelize, DataTypes);
const TripCargo = TripCargoModel(sequelize, DataTypes);
const Vehicle = VehicleModel(sequelize, DataTypes);

const projectService = new ProjectServiceClass(Project);
const vehicleService = new VehicleServiceClass(Vehicle);
const tripService = new TripServiceClass(Trip, projectService, vehicleService);
const cargoService = new CargoServiceClass(Cargo);
const tripCargoService = new TripCargoServiceClass(
  TripCargo,
  cargoService,
  tripService
);

export type ServicesType = {
  projectService: ProjectServiceClass;
  tripService: TripServiceClass;
  cargoService: CargoServiceClass;
  tripCargoService: TripCargoServiceClass;
  vehicleService: VehicleServiceClass;
};

const services: ServicesType = {
  projectService,
  tripService,
  cargoService,
  tripCargoService,
  vehicleService,
};

export default services;
