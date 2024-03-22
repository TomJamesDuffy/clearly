import { ApolloServer, GraphQLResponse } from "@apollo/server";

import { runMigrations, rollbackMigrations } from "./utils/migrate";
import { setupServer, ContextType } from "../../../server";
import services from "../../../services";
import { extractErrorData, extractResultData } from "./utils/utils";

import { ProjectQuery } from "./queries/project";
import { ProjectsQuery } from "./queries/projects";
import { CreateProjectMutation } from "./mutations/create";
import { DeleteProjectMutation } from "./mutations/delete";

let server: ApolloServer<ContextType>;
let context: { services: typeof services } | undefined;

async function initializeServices() {
  await runMigrations();
  context = { services };
}

beforeAll(async () => {
  await initializeServices();
  server = await setupServer();
});

afterAll(async () => {
  await rollbackMigrations();
  await server.stop();
});

describe("GraphQL Endpoint", () => {
  it("should fetch all projects", async () => {
    const result: GraphQLResponse = await server.executeOperation(
      { query: ProjectsQuery },
      { contextValue: context }
    );

    const data = extractResultData(result);

    expect(data && data.projects).toEqual([
      {
        id: "37d4c105-243c-4ca4-a15f-6c98d5849dbb",
        url: "http://example.com/project1",
        status: "IN_PROGRESS",
        country: "Country A",
        createdDate: "1675209600000",
        updatedDate: "1675209600000",
      },
      {
        id: "95d039fd-bd45-4e2a-a299-07f16821477a",
        url: "http://example.com/project2",
        status: "COMPLETE",
        country: "Country B",
        createdDate: "1675296000000",
        updatedDate: "1675296000000",
      },
      {
        id: "c4a9b773-9192-444a-863c-3c62e6c5f0aa",
        url: "http://example.com/project3",
        status: "PENDING",
        country: "Country C",
        createdDate: "1675382400000",
        updatedDate: "1675382400000",
      },
      {
        id: "56784e61-78bc-4e6f-b8e3-92809b2d3671",
        url: "http://example.com/project3",
        status: "PENDING",
        country: null,
        createdDate: "1675382400000",
        updatedDate: "1675382400000",
      },
      {
        id: "ab608323-9812-49f7-ba75-c9a35a415517",
        url: "http://example.com/project3",
        status: "PENDING",
        country: "Country C",
        createdDate: "1675382400000",
        updatedDate: "1675382400000",
      },
    ]);
  });
  it("should fetch a single project by ID", async () => {
    const projectId = "37d4c105-243c-4ca4-a15f-6c98d5849dbb";

    const result = await server.executeOperation(
      {
        query: ProjectQuery,
        variables: { projectId },
      },
      { contextValue: context }
    );

    const data = extractResultData(result);

    expect(data && data.project).toEqual({
      id: "37d4c105-243c-4ca4-a15f-6c98d5849dbb",
      url: "http://example.com/project1",
      status: "IN_PROGRESS",
      country: "Country A",
      createdDate: "1675209600000",
      updatedDate: "1675209600000",
    });
  });
  it("should return an error for an incorrectly formatted uuid ID", async () => {
    const invalidProjectId = "non-existent-id";

    const result = await server.executeOperation(
      {
        query: ProjectQuery,
        variables: { projectId: invalidProjectId },
      },
      { contextValue: context }
    );

    const data = extractErrorData(result);

    expect(data && data[0].message).toEqual(
      "Failed to fetch project with ID non-existent-id."
    );
  });
  it("should return null for a UUID that does not exist in projects", async () => {
    const invalidProjectId = "84982e88-b4dd-4dcb-b18c-b5afd56d2275";
    const result = await server.executeOperation(
      {
        query: ProjectQuery,
        variables: { projectId: invalidProjectId },
      },
      { contextValue: context }
    );

    const data = extractResultData(result);

    expect(data && data.project).toEqual(null);
  });
  it("should create a new project", async () => {
    const newProjectInput = {
      url: "http://example.com/new-project",
      status: "COMPLETE",
      country: "Country D",
    };

    const result = await server.executeOperation(
      {
        query: CreateProjectMutation,
        variables: newProjectInput,
      },
      { contextValue: context }
    );

    const data = extractResultData(result);

    expect(data).toHaveProperty("createProject");
    expect(data && data.createProject).toMatchObject(newProjectInput);
    expect(data && data.createProject).toHaveProperty("id");
  });
  it("should delete an existing project", async () => {
    const newProjectInput = {
      url: "http://example.com/new-project",
      status: "COMPLETE",
      country: "Country D",
    };

    const createdProjectResult = await server.executeOperation(
      {
        query: CreateProjectMutation,
        variables: newProjectInput,
      },
      { contextValue: context }
    );

    const createdProject: any = extractResultData(createdProjectResult);

    const projectIdToDelete =
      createdProject &&
      createdProject.createProject &&
      createdProject.createProject.id;

    const result = await server.executeOperation(
      {
        query: DeleteProjectMutation,
        variables: { projectId: projectIdToDelete },
      },
      { contextValue: context }
    );

    const data = extractResultData(result);

    expect(data).toHaveProperty("deleteProject");
    expect(data && data.deleteProject).toBe(true);
  });
});
