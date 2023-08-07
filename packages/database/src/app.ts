import { ApolloServer } from "apollo-server";
import { typeDefs, resolvers } from "./schema";

export const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});
