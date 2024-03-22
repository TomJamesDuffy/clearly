import gql from "graphql-tag";
import { projectDetailsFragment } from "./project-details";

export const ProjectQuery = gql`
  ${projectDetailsFragment}

  query Project($projectId: ID!) {
    project(id: $projectId) {
      ...ProjectDetails
    }
  }
`;
