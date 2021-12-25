import { gql } from "@apollo/client";

const DetailPokemon = gql`
  query pokemon($name: String!) {
    pokemon(name: $name) {
      status
      id
      name
      species {
        id
        url
      }
      moves {
        move {
          name
        }
      }
      types {
        type {
          name
        }
      }
    }
  }
`;

export default DetailPokemon;
