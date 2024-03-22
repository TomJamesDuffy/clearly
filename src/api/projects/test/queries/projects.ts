import gql from "graphql-tag";
import { projectDetailsFragment } from "./project-details";

export const ProjectsQuery = gql`
  ${projectDetailsFragment}

  query Projects {
    projects {
      ...ProjectDetails
    }
  }
`;
