import { ApolloServer } from "apollo-server";
import { typeDefs, resolvers } from "./ResolversModules";

export const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});
