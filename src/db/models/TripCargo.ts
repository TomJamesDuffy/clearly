import { Model } from "sequelize";
import { Models } from "./index";

export type TripCargoType = {
  tripId: string;
  cargoId: string;
  quantity: number;
  status: string;
  createdDate: Date;
  updatedDate: Date;
};
export interface TripCargoInstance
  extends Model<TripCargoType>,
    TripCargoType {}

export type TripCargoStatic = typeof Model & {
  new (values?: object): TripCargoInstance;
  associate?: (models: Models) => void;
};

export default (sequelize: any, DataTypes: any) => {
  const TripCargo = <TripCargoStatic>sequelize.define(
    "TripCargo",
    {
      tripId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "Trip",
          key: "id",
        },
        primaryKey: true,
      },
      cargoId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "Cargo",
          key: "id",
        },
        primaryKey: true,
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      status: {
        type: DataTypes.STRING(255),
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
      tableName: "TripCargo",
      timestamps: false,
    }
  );

  return TripCargo;
};
