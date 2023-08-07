import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  documents: "src/test/**/*.graphql",
  overwrite: true,
  schema: "src/schema.graphql",
  generates: {
    "./src/gql/graphql.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
      config: {
        withHooks: true,
        withComponent: false,
      },
    },
    "introspection.json": {
      plugins: ["introspection"],
      config: {
        minify: true,
      },
    },
  },
};

export default config;
