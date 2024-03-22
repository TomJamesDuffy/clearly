import { GraphQLResolveInfo } from "graphql";
import { ContextType } from "../../server";

import {
  Project,
  MutationCreateProjectArgs,
} from "../../../__generated__/graphql-types";

const projectResolver = {
  Query: {
    projects: async (
      parent: void,
      args: Project,
      context: ContextType,
      info: GraphQLResolveInfo
    ) => {
      try {
        return await context.services.projectService.findAll();
      } catch (error) {
        throw new Error("Failed to fetch projects.");
      }
    },
    project: async (
      parent: void,
      args: Project,
      context: ContextType,
      info: GraphQLResolveInfo
    ) => {
      try {
        return await context.services.projectService.find(args.id);
      } catch (error) {
        throw new Error(`Failed to fetch project with ID ${args.id}.`);
      }
    },
  },
  Mutation: {
    createProject: async (
      parent: void,
      args: MutationCreateProjectArgs,
      context: ContextType,
      info: GraphQLResolveInfo
    ) => {
      try {
        return await context.services.projectService.create(args);
      } catch (error) {
        console.log(error);
        throw new Error(`Failed to create project.`);
      }
    },
    deleteProject: async (
      parent: void,
      args: { id: string },
      context: ContextType,
      info: GraphQLResolveInfo
    ) => {
      try {
        const success = await context.services.projectService.delete(args.id);
        return success;
      } catch (error) {
        throw new Error(`Failed to delete project with ID ${args.id}.}`);
      }
    },
  },
};

export default projectResolver;
