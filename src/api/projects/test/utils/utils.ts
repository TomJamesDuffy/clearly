import { GraphQLResponse } from "@apollo/server/dist/esm/externalTypes/graphql";

export const extractResultData = (result: GraphQLResponse) => {
  if (result.body.kind === "single") {
    return result.body.singleResult.data;
  } else {
    throw new Error("Expected single result, but received incremental result.");
  }
};

export const extractErrorData = (result: GraphQLResponse) => {
  if (result.body.kind === "single") {
    return result.body.singleResult.errors;
  } else {
    throw new Error("Expected errors, but received incremental result.");
  }
};
