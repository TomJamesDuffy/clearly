import gql from "graphql-tag";

export const projectDetailsFragment = gql`
  fragment ProjectDetails on Project {
    id
    url
    status
    country
    createdDate
    updatedDate
  }
`;
