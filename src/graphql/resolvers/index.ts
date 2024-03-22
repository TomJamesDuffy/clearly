import cargoResolver from "../../api/cargo/resolvers";
import projectResolver from "../../api/projects/resolvers";
import tripResolver from "../../api/trip/resolvers";

const resolvers = {
  Query: {
    ...projectResolver.Query,
    ...tripResolver.Query,
    ...cargoResolver.Query,
  },
  Trip: {
    ...tripResolver.Trip,
  },
  Cargo: {
    ...cargoResolver.Cargo,
  },
  Mutation: {
    ...projectResolver.Mutation,
  },
};

export default resolvers;
