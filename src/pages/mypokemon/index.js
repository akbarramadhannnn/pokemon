import React, { Fragment, useCallback, useEffect, useState } from "react";
import { Heading, Container, Pokemon, Modal, Text } from "../../components";
import Dexie from "../../lib/dexie";

const Index = () => {
  const [dataMyPokemon, setDataMyPokemon] = useState([]);
  const [pokemonId, setPokemonId] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [modal, setModal] = useState({
    isShow: false,
    buttonLeft: {
      isShow: false,
      text: "",
    },
    buttonRight: {
      isShow: false,
      text: "",
    },
  });

  useEffect(() => {
    Dexie.mypokemon.toArray().then((response) => {
      setDataMyPokemon(response);
      setIsLoading(false);
    });
  }, []);

  const handleRemovePokemon = useCallback((id) => {
    setPokemonId(id);
    setModal((oldState) => ({
      ...oldState,
      isShow: true,
      buttonLeft: {
        isShow: true,
        text: "Cancel",
      },
      buttonRight: {
        isShow: true,
        text: "Yes, sure",
      },
    }));
  }, []);

  const handleCloseModal = useCallback(() => {
    setPokemonId("");
    setModal({
      isShow: false,
      buttonLeft: {
        isShow: false,
        text: "",
      },
      buttonRight: {
        isShow: false,
        text: "",
      },
    });
  }, []);

  const handleSubmitRemove = useCallback(() => {
    const oldState = [...dataMyPokemon];
    const index = dataMyPokemon.findIndex((d) => d.id === pokemonId);
    oldState.splice(index, 1);
    setDataMyPokemon(oldState);
    Dexie.mypokemon.delete(pokemonId);
    handleCloseModal();
  }, [pokemonId, dataMyPokemon, handleCloseModal]);

  return (
    <Fragment>
      {isLoading && <Heading>Loading...</Heading>}

      {!isLoading && (
        <Fragment>
          <Heading>My Pokemon</Heading>
          {!dataMyPokemon.length > 0 && (
            <Container center={true}>
              <p>Data Not Found</p>
            </Container>
          )}
          <Container>
            {dataMyPokemon.length > 0 &&
              dataMyPokemon.map((data, i) => {
                return (
                  <Pokemon
                    key={i}
                    data={data}
                    onRemove={(id) => handleRemovePokemon(id)}
                  />
                );
              })}
          </Container>
        </Fragment>
      )}

      {modal.isShow && (
        <Modal
          buttonLeft={{
            ...modal.buttonLeft,
            onClick: () => handleCloseModal(),
          }}
          buttonRight={{
            ...modal.buttonRight,
            onClick: () => handleSubmitRemove(),
          }}
        >
          <Text center={true}>Are you sure want remove this pokemon ?</Text>
        </Modal>
      )}
    </Fragment>
  );
};

export default Index;
