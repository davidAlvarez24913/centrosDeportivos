import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

// const httpLink = new HttpLink({ uri: "http://159.89.85.206:4000/graphql" });
const httpLink = new HttpLink({ uri: "http://localhost:4000/graphql" });
export const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});
