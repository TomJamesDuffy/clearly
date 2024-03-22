import gql from "graphql-tag";

export const DeleteProjectMutation = gql`
  mutation DeleteProject($projectId: ID!) {
    deleteProject(id: $projectId)
  }
`;
