import { Fragment, useContext } from 'react';
import { PokemonDetailContext } from 'context/PokemonDetailProvider';
import {
  Card,
  Title,
  Button,
  LoadingDetail,
  Modal,
  Input,
  Label,
} from 'components';
import WrapperPokemonDetail, {
  Container,
  WrapperContent,
  ImageArea,
  InfoArea,
  InfoAreaTop,
  InfoAreaBottom,
  TitleArea,
  ProgressBar,
} from './PokemonDetailStyle';
import { Link } from 'react-router-dom';

const PokemonDetail = () => {
  const {
    detailPokemon,
    loadingData,
    submitPokemon,
    showModal,
    onCloseModal,
    catchPokemon,
    onChangePokemon,
    pokemonName,
    disabledSubmit,
    error,
  } = useContext(PokemonDetailContext);

  return (
    <Fragment>
      {loadingData ? (
        <LoadingDetail />
      ) : (
        <WrapperPokemonDetail>
          {showModal && (
            <Modal
              onClose={onCloseModal}
              onSubmit={submitPokemon}
              disabledSubmit={disabledSubmit}
            >
              <Label text="Pokemon Name" />
              <Input onChange={onChangePokemon} value={pokemonName} />
              <p style={{ color: 'red', fontWeight: 'bold', margin: 0 }}>
                {error}
              </p>
            </Modal>
          )}

          <div style={{ marginBottom: '20px' }}>
            <Link to="/" style={{ color: '#00ace6' }}>
              Back
            </Link>
          </div>

          <Card>
            <Container>
              <WrapperContent>
                <ImageArea>
                  <img src={detailPokemon.image} alt="Gambar" />
                </ImageArea>
                <InfoArea>
                  <InfoAreaTop>
                    <Title fontSize={42} fontWeight={700} paddingBottom={10}>
                      {detailPokemon.name}
                    </Title>
                  </InfoAreaTop>

                  {detailPokemon.rate.map((r, i) => {
                    let name = r.stat.name;
                    if (name === 'special-attack') {
                      name = 'special attack';
                    }

                    if (name === 'special-defense') {
                      name = 'special defense';
                    }
                    return (
                      <InfoAreaBottom key={i}>
                        <TitleArea>
                          <Title fontSize={20}>{name}</Title>
                        </TitleArea>
                        <ProgressBar
                          value={r.base_stat > 100 ? 100 : r.base_stat}
                        >
                          <div className="bar">
                            {r.base_stat > 100 ? 100 : r.base_stat}%
                          </div>
                        </ProgressBar>
                      </InfoAreaBottom>
                    );
                  })}
                </InfoArea>
              </WrapperContent>
            </Container>

            <Container>
              <div style={{ textAlign: 'right' }}>
                <Button onClick={() => catchPokemon(detailPokemon)}>
                  CATCH
                </Button>
              </div>
            </Container>
          </Card>
        </WrapperPokemonDetail>
      )}
    </Fragment>
  );
};

export default PokemonDetail;
