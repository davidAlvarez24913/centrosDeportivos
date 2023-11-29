import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const httpLink = new HttpLink({ uri: "http://159.65.176.238:4000/graphql" });
export const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});
