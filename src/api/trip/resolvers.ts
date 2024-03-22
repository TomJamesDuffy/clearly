import { GraphQLResolveInfo } from "graphql";
import { ContextType } from "../../server";

const tripResolver = {
  Query: {
    trips: async (
      parent: void,
      args: {},
      context: ContextType,
      info: GraphQLResolveInfo
    ) => {
      try {
        return await context.services.tripService.findAll();
      } catch (error) {
        throw new Error("Failed to fetch trips.");
      }
    },
    trip: async (
      parent: void,
      args: { id: string },
      context: ContextType,
      info: GraphQLResolveInfo
    ) => {
      try {
        return await context.services.tripService.find(args.id);
      } catch (error) {
        throw new Error(`Failed to fetch trip with ID ${args.id}.`);
      }
    },
    getTripsByProject: async (
      parent: void,
      args: {},
      context: ContextType,
      info: GraphQLResolveInfo
    ) => {
      try {
        return await context.services.tripService.getTripsByProject();
      } catch (error) {
        throw new Error(`Failed to fetch trips grouped by project.`);
      }
    },
  },
  // Field resolvers
  Trip: {
    project: async (
      trip: { projectId: string },
      args: {},
      context: ContextType,
      info: GraphQLResolveInfo
    ) => {
      try {
        return await context.services.projectService.find(trip.projectId);
      } catch (error) {
        throw new Error(`Failed to fetch project for trip.`);
      }
    },
    cargos: async (
      trip: { id: string },
      args: {},
      context: ContextType,
      info: GraphQLResolveInfo
    ) => {
      try {
        return await context.services.tripCargoService.findCargosByTripId(
          trip.id
        );
      } catch (error) {
        throw new Error(`Failed to fetch cargos for trip.`);
      }
    },
    vehicle: async (
      trip: { vehicleId: string },
      args: {},
      context: ContextType,
      info: GraphQLResolveInfo
    ) => {
      try {
        return await context.services.vehicleService.find(trip.vehicleId);
      } catch (error) {
        throw new Error(`Failed to fetch cargos for trip.`);
      }
    },
  },
};

export default tripResolver;
