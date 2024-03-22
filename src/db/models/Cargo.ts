import { Model } from "sequelize";
import { Models } from "./index";
import { Cargo } from "../../../__generated__/graphql-types";

export interface CargoInstance extends Model<Cargo>, Cargo {}

export type CargoStatic = typeof Model & {
  new (values?: object): CargoInstance;
  associate?: (models: Models) => void;
};

export default (sequelize: any, DataTypes: any) => {
  const Cargo = <CargoStatic>sequelize.define(
    "Cargo",
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      description: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      weight: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      payload: {
        type: DataTypes.ENUM("wood", "oil", "concrete"),
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
      tableName: "Cargo",
      timestamps: false,
    }
  );

  return Cargo;
};
