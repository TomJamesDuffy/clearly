import { Model } from "sequelize";
import { Models } from "./index";

export type TripType = {
  id: string;
  projectId: string;
  vehicleId: string;
  distanceKm: number;
  createdDate: Date;
  updatedDate: Date;
};

export interface TripInstance extends Model<TripType>, TripType {}

export type TripStatic = typeof Model & {
  new (values?: object): TripInstance;
  associate?: (models: Models) => void;
};

export default (sequelize: any, DataTypes: any) => {
  const Trip = <TripStatic>sequelize.define(
    "Trip",
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      projectId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "Project",
          key: "id",
        },
      },
      vehicleId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "Vehicle",
          key: "id",
        },
      },
      distanceKm: {
        type: DataTypes.INTEGER,
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
      tableName: "Trip",
      timestamps: false,
    }
  );

  return Trip;
};
