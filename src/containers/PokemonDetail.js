import { Fragment, useContext } from 'react';
import { PokemonDetailContext } from 'context/PokemonDetailProvider';
import { Context } from 'context';
import {
  Container,
  Card,
  Flex,
  Col,
  Title,
  ProgressBar,
  Button,
} from 'components';

const PokemonDetail = () => {
  const { detailPokemon, loadingData } = useContext(PokemonDetailContext);
  const { setMyPokemonList } = useContext(Context);

  const catchPokemon = (data) => {
    setMyPokemonList((state) => {
      const filterMyListPokemon = state.filter((m) => m.id === data.id);
      if (!filterMyListPokemon.length > 0) {
        state = [...state, data];
      } else {
        console.log('list sudah tersedia')
      }
      return state;
    });
  };

  return (
    <Fragment>
      {loadingData ? (
        <h2>Loading Data</h2>
      ) : (
        <Container
          paddingTop={30}
          paddingRight={30}
          paddingBottom={30}
          paddingLeft={30}
        >
          <Card>
            <Container
              paddingTop={50}
              paddingRight={50}
              paddingBottom={50}
              paddingLeft={50}
            >
              <Flex>
                <Col marginRight={40}>
                  {detailPokemon.image && (
                    <img
                      src={detailPokemon.image}
                      width="300px"
                      height="300px"
                      alt="Gambar"
                    />
                  )}
                </Col>

                <Col>
                  <Title fontSize={42} fontWeight={700} paddingBottom={10}>
                    {detailPokemon.name}
                  </Title>
                  <Flex>
                    <Col marginRight={40}>
                      <Title fontSize={24}>HP</Title>
                      <Title fontSize={24}>Attack</Title>
                      <Title fontSize={24}>Defense</Title>
                      <Title fontSize={24}>Speed</Title>
                      <Title fontSize={24}>Special Attack</Title>
                      <Title fontSize={24}>Special Defense</Title>
                    </Col>
                    <Col>
                      {detailPokemon.rate.map((r, i) => {
                        return (
                          <ProgressBar value={r.base_stat} key={i}>
                            <Title fontSize={15} color="#ffffff">
                              {r.base_stat > 100 ? 100 : r.base_stat}%
                            </Title>
                          </ProgressBar>
                        );
                      })}
                    </Col>
                  </Flex>
                </Col>
              </Flex>

              <div
                style={{
                  height: '50px',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    float: 'right',
                  }}
                >
                  <Button onClick={() => catchPokemon(detailPokemon)}>
                    CATCH
                  </Button>
                </div>
              </div>
            </Container>
          </Card>
        </Container>
      )}
    </Fragment>
  );
};

export default PokemonDetail;
