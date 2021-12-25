import React, { Fragment, useState, useCallback, useEffect } from "react";
import { useQuery } from "@apollo/client";
import LoadPokemon from "../../graphql/LoadPokemon";

import { Pokemon, Container, Heading, Button } from "../../components";

import Dexie from "../../lib/dexie";

import { UrlImage } from "../../utils/constant";

const Index = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [offset, setOffset] = useState(0);
  const { loading, data: { pokemons = {} } = {} } = useQuery(LoadPokemon, {
    variables: {
      limit: 20,
      offset: offset,
    },
  });

  useEffect(() => {
    if (!loading) {
      Dexie.mypokemon.toArray().then((response) => {
        let dataPokemon = pokemons.results;
        for (let i = 0; i < dataPokemon.length; i++) {
          const count = response.filter(
            (d) => d.pokemonId === dataPokemon[i].id
          ).length;
          const image = `${UrlImage}/${dataPokemon[i].name}.jpg`;
          setPokemonList((oldState) => [
            ...oldState,
            { ...dataPokemon[i], count, image },
          ]);
        }
      });
    }
  }, [loading, pokemons]);

  const handleLoadMore = useCallback(() => {
    setOffset(offset + 20);
  }, [offset]);

  return (
    <Fragment>
      {loading && <Heading>Loading...</Heading>}

      {!loading && (
        <Fragment>
          <Heading>Pokemon List</Heading>
          <Container>
            {pokemonList.map((data, i) => {
              return <Pokemon key={i} data={data} />;
            })}
          </Container>

          <Container center={true} marginTop={30} marginBottom={30}>
            <Button onClick={handleLoadMore} type="btn">
              Load More
            </Button>
          </Container>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Index;
