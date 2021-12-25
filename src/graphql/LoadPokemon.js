import { gql } from "@apollo/client";

const LoadPokemon = gql`
  query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      status
      message
      results {
        id
        url
        name
      }
    }
  }
`;

export default LoadPokemon;
