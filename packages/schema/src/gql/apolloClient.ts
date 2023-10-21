import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const httpLink = new HttpLink({
  uri: `http://${process.env.IP_ADDRESS}:4000/graphql`,
});
export const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});
