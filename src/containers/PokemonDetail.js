import { Fragment, useContext } from 'react';
import { PokemonDetailContext } from 'context/PokemonDetailProvider';
import { Container, Card, Flex, Col, Title, ProgressBar } from 'components';

const PokemonDetail = () => {
  const { name, image } = useContext(PokemonDetailContext);
  return (
    <Fragment>
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
                <img src={image} width="300px" height="300px" alt="Gambar" />
              </Col>

              <Col>
                <Title fontSize={40} fontWeight={700}>
                  {name}
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
                    <ProgressBar>
                      <Title fontSize={15}>30%</Title>
                    </ProgressBar>
                    <ProgressBar>
                      <Title fontSize={15}>30%</Title>
                    </ProgressBar>
                    <ProgressBar>
                      <Title fontSize={15}>30%</Title>
                    </ProgressBar>
                    <ProgressBar>
                      <Title fontSize={15}>30%</Title>
                    </ProgressBar>
                    <ProgressBar>
                      <Title fontSize={15}>30%</Title>
                    </ProgressBar>
                    <ProgressBar>
                      <Title fontSize={15}>30%</Title>
                    </ProgressBar>
                  </Col>
                </Flex>
              </Col>
            </Flex>
          </Container>
        </Card>
      </Container>
    </Fragment>
  );
};

export default PokemonDetail;
