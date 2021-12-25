import { ApolloClient, InMemoryCache, HttpLink, from } from "@apollo/client";

const link = from([
  new HttpLink({ uri: "https://graphql-pokeapi.vercel.app/api/graphql" }),
]);

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});
