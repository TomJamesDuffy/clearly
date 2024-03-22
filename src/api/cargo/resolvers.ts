import { GraphQLResolveInfo } from "graphql";
import { ContextType } from "../../server";

const cargoResolver = {
  Query: {
    cargos: async (
      parent: void,
      args: {},
      context: ContextType,
      info: GraphQLResolveInfo
    ) => {
      try {
        return await context.services.cargoService.findAll();
      } catch (error) {
        throw new Error("Failed to fetch cargos.");
      }
    },
    cargo: async (
      parent: void,
      args: { id: string },
      context: ContextType,
      info: GraphQLResolveInfo
    ) => {
      try {
        return await context.services.cargoService.find(args.id);
      } catch (error) {
        throw new Error(`Failed to fetch cargo with ID ${args.id}.`);
      }
    },
  },
  Cargo: {
    trips: async (
      cargo: { id: string },
      args: {},
      context: ContextType,
      info: GraphQLResolveInfo
    ) => {
      try {
        return await context.services.tripCargoService.findTripsByCargoId(
          cargo.id
        );
      } catch (error) {
        throw new Error(`Failed to fetch project for trip.`);
      }
    },
  },
};

export default cargoResolver;
