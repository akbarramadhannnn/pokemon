import React, {
  Fragment,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useQuery } from "@apollo/client";
import DetailPokemon from "../../graphql/DetailPokemon";

import { Heading, Modal, Input, Label, Text, Button } from "../../components";

import Dexie from "../../lib/dexie.js";

import { UrlImage } from "../../utils/constant";

import {
  Container,
  Content,
  WrapImage,
  WrapInfo,
  Row,
  Title,
  Dot,
  WrapText,
  Image,
  WrapButton,
} from "./DetailStyle";

const Index = ({ match, history }) => {
  const name = match.params.name;
  const { loading, data: { pokemon = {} } = {} } = useQuery(DetailPokemon, {
    variables: {
      name: name,
    },
  });
  const [dataDetail, setDataDetail] = useState({});
  const [modal, setModal] = useState({
    isShow: false,
    status: "",
    buttonLeft: {
      isShow: false,
      text: "",
    },
    buttonRight: {
      isShow: false,
      text: "",
    },
  });
  const [pokemonName, setPokemonName] = useState("");
  const [errorPokemonName, setErrorPokemonName] = useState("");
  const [listMyPokemon, setListMyPokemon] = useState([]);

  useEffect(() => {
    Dexie.mypokemon.toArray().then((response) => {
      setListMyPokemon(response);
    });
  }, []);

  useEffect(() => {
    if (!loading) {
      setDataDetail(pokemon);
    }
  }, [loading, pokemon]);

  const filterMyPokemontList = useMemo(() => {
    const hasil = listMyPokemon.filter((item) => {
      const text = pokemonName ? pokemonName : dataDetail.name;
      const lowerCase = text?.toLowerCase();
      return item.name.toLowerCase() === lowerCase;
    });
    return hasil;
  }, [listMyPokemon, pokemonName, dataDetail]);

  const handleOnCloseModal = useCallback(() => {
    setModal((oldState) => ({
      ...oldState,
      isShow: false,
      status: "",
      buttonLeft: {
        isShow: false,
        text: "",
      },
      buttonRight: {
        isShow: false,
        text: "",
      },
    }));
    setPokemonName("");
    setErrorPokemonName("");
  }, []);

  const handleSavePokemonName = useCallback(() => {
    if (pokemonName === "") {
      setErrorPokemonName("pokemon name is required");
    } else {
      if (filterMyPokemontList.length > 0) {
        setErrorPokemonName("pokemon name already");
      } else {
        const payload = {
          pokemonId: dataDetail.id,
          name: pokemonName,
          image: `${UrlImage}/${dataDetail.name}.jpg`,
        };
        setListMyPokemon((oldState) => [...oldState, payload]);
        Dexie.mypokemon.add(payload);
        handleOnCloseModal();
      }
    }
  }, [pokemonName, filterMyPokemontList, dataDetail, handleOnCloseModal]);

  const handleChangeNameModal = useCallback(() => {
    setModal((oldState) => ({
      ...oldState,
      status: "change",
      buttonLeft: {
        ...oldState.buttonLeft,
        text: "Close",
      },
      buttonRight: {
        ...oldState.buttonRight,
        text: "Save",
      },
    }));
  }, []);

  const handleSaveCatch = useCallback(() => {
    const payload = {
      pokemonId: dataDetail.id,
      name: dataDetail.name,
      image: `${UrlImage}/${dataDetail.name}.jpg`,
    };
    if (filterMyPokemontList.length > 0) {
      setModal((oldState) => ({
        ...oldState,
        status: "available",
        buttonLeft: {
          ...oldState.buttonLeft,
          text: "Try Catch Again",
        },
        buttonRight: {
          ...oldState.buttonRight,
          text: "Change Name",
        },
      }));
    } else {
      handleOnCloseModal();
      setListMyPokemon((oldState) => [...oldState, payload]);
      Dexie.mypokemon.add(payload);
    }
  }, [dataDetail, filterMyPokemontList, handleOnCloseModal]);

  const handleCatch = useCallback(() => {
    if (Math.random() >= 0.5) {
      setModal((oldState) => ({
        ...oldState,
        isShow: true,
        status: "success",
        buttonLeft: {
          isShow: true,
          text: "No & Save",
        },
        buttonRight: {
          isShow: true,
          text: "Yes, Change",
        },
      }));
    } else {
      setModal((oldState) => ({
        ...oldState,
        isShow: true,
        status: "fail",
        buttonLeft: {
          isShow: true,
          text: "Close",
        },
        buttonRight: {
          isShow: false,
          text: "",
        },
      }));
    }
  }, []);

  const handleOnChangePokemon = useCallback((e) => {
    const { value } = e.target;
    setPokemonName(value);
    setErrorPokemonName("");
  }, []);

  const handleBack = useCallback(() => {
    history.push("/list");
  }, [history]);

  return (
    <Fragment>
      {loading && <Heading>Loading...</Heading>}

      {!loading && (
        <Container>
          <Content>
            <WrapImage>
              {dataDetail?.name && (
                <Image
                  src={`${UrlImage}/${dataDetail.name}.jpg`}
                  alt="Pokemon"
                />
              )}
            </WrapImage>

            <WrapInfo>
              <Row>
                <Title>Name</Title>
                <Dot>:</Dot>
                <Text color="#808080">{dataDetail?.name}</Text>
              </Row>
              <Row>
                <Title>Moves</Title>
                <Dot>:</Dot>
                <WrapText>
                  {dataDetail?.moves &&
                    dataDetail.moves.map((move, index) => {
                      return (
                        <Text color="#808080" key={index}>
                          - {move.move.name}
                        </Text>
                      );
                    })}
                </WrapText>
              </Row>
              <Row>
                <Title>Types</Title>
                <Dot>:</Dot>
                <WrapText>
                  {dataDetail?.types &&
                    dataDetail.types.map((type, index) => {
                      return (
                        <Text color="#808080" key={index}>
                          - {type.type.name}
                        </Text>
                      );
                    })}
                </WrapText>
              </Row>
            </WrapInfo>
          </Content>

          <WrapButton>
            <Button onClick={handleBack} type="outline">
              Back
            </Button>
            <Button onClick={handleCatch} type="btn">
              Catch
            </Button>
          </WrapButton>
        </Container>
      )}

      {modal.isShow && (
        <Modal
          buttonLeft={{
            ...modal.buttonLeft,
            onClick: () => {
              modal.status === "success" && handleSaveCatch();
              (modal.status === "fail" ||
                modal.status === "available" ||
                modal.status === "change") &&
                handleOnCloseModal();
            },
          }}
          buttonRight={{
            ...modal.buttonRight,
            onClick: () => {
              modal.status === "success" && handleChangeNameModal();
              modal.status === "available" && handleChangeNameModal();
              modal.status === "change" && handleSavePokemonName();
            },
          }}
        >
          {modal.status === "available" && (
            <Text center={true}>
              sorry pokemon name already please change the name!
            </Text>
          )}

          {modal.status === "success" && (
            <Text center={true}>
              Successful catching pokemon. do you want to change pokemon name ?
            </Text>
          )}

          {modal.status === "change" && (
            <Fragment>
              <Label text="Pokemon Name" />
              <Input onChange={handleOnChangePokemon} value={pokemonName} />
              {errorPokemonName && <Text color="red">{errorPokemonName}</Text>}
            </Fragment>
          )}

          {modal.status === "fail" && (
            <Text center={true}>Failed catching pokemon</Text>
          )}
        </Modal>
      )}
    </Fragment>
  );
};

export default Index;
