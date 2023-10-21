import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const httpLink = new HttpLink({ uri: "http://64.227.3.57:4000/graphql" });
export const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});
