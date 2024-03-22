import gql from "graphql-tag";
import { projectDetailsFragment } from "../queries/project-details";

export const CreateProjectMutation = gql`
  ${projectDetailsFragment}

  mutation CreateProject($url: String!, $status: Status!, $country: String) {
    createProject(url: $url, status: $status, country: $country) {
      ...ProjectDetails
    }
  }
`;
