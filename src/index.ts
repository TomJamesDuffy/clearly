import { startStandaloneServer } from "@apollo/server/standalone";
import { setupServer } from "./server";
import aggregatedServices from "./services";

const startServer = async () => {
  const server = await setupServer();

  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
    context: async () => ({
      services: aggregatedServices,
    }),
  });

  console.log(`🚀 Server ready at ${url}`);
};

startServer().catch((error) => {
  console.error("Failed to start the server:", error);
});

export default startServer;
