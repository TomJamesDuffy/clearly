import { ApolloServer } from "@apollo/server";
import { setupDatabase } from "./db";
import { typeDefs } from "./graphql/utils";
import resolvers from "./graphql/resolvers";
import { ServicesType } from "./services";

export type ContextType = {
  services: ServicesType;
};

export const setupServer = async (): Promise<ApolloServer<ContextType>> => {
  await setupDatabase();

  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  return server;
};
