import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

// this uri will be enviroment variable

const httpLink = new HttpLink({ uri: "http://localhost:4000" });
export const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});
