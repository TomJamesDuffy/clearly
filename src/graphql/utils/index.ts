import { mergeTypeDefs } from "@graphql-tools/merge";
import { readFileSync } from "fs";
import { join } from "path";
import glob from "glob";

const typeDefs = mergeTypeDefs(
  glob
    .sync(join(__dirname, "../../api/**/schema.graphql"))
    .map((file) => readFileSync(file, "utf8"))
);

export { typeDefs };
