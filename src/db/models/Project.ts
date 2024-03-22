import { Model } from "sequelize";
import { Models } from "./index";

import { Project } from "../../../__generated__/graphql-types";

export interface ProjectInstance extends Model<Project>, Project {
  country: string;
}

export type ProjectStatic = typeof Model & {
  new (values?: object): ProjectInstance;
  associate?: (models: Models) => void;
};

export default (sequelize: any, DataTypes: any) => {
  const Project = <ProjectStatic>sequelize.define(
    "Project",
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      url: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      status: {
        type: DataTypes.ENUM,
        values: ["IN_PROGRESS", "COMPLETE", "PENDING", "CANCELLED"],
        allowNull: false,
      },
      country: {
        type: DataTypes.STRING(255),
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
      tableName: "Project",
      timestamps: false,
    }
  );

  return Project;
};
