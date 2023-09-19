import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader";
import { loadSchemaSync } from "@graphql-tools/load";
import { printSchema } from "graphql";

const typeDefs = loadSchemaSync("../schema/src/schema.graphql", {
  loaders: [new GraphQLFileLoader()],
});
const schemaString = printSchema(typeDefs);

export default schemaString;
