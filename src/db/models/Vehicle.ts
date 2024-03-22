import { Model } from "sequelize";
import { Models } from "./index";
import { Vehicle } from "../../../__generated__/graphql-types";

export interface VehicleInstance extends Model<Vehicle>, Vehicle {}

export type VehicleStatic = typeof Model & {
  new (values?: object): VehicleInstance;
  associate?: (models: Models) => void;
};

export default (sequelize: any, DataTypes: any) => {
  const Vehicle = <VehicleStatic>sequelize.define(
    "Vehicle",
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      type: {
        type: DataTypes.ENUM(
          "light_commercial",
          "heavy_truck",
          "semi_trailer_truck",
          "flatbed_truck"
        ),
        allowNull: false,
      },
      licensePlate: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true,
      },
      capacity: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      createdDate: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      updatedDate: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      tableName: "Vehicle",
      timestamps: false,
    }
  );

  return Vehicle;
};
