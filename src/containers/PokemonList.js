import { Fragment, useContext } from 'react';
import { PokemonListContext } from 'context/PokemonListProvider';
import { Container, Grid, Card, Title, Button, LoadingCard } from 'components';
import { Link } from 'react-router-dom';
import LoadingCircle from 'assets/icon/loading-circle.svg';

const ListPokemon = () => {
  const {
    dataPokemon,
    limit,
    countPokemon,
    loadingDataPokemon,
    sizeDataPokemon,
    loadingButton,
    seeMore,
  } = useContext(PokemonListContext);

  return (
    <Fragment>
      {loadingDataPokemon ? (
        <LoadingCard />
      ) : (
        <Fragment>
          <Container
            paddingTop={20}
            paddingRight={20}
            paddingBottom={20}
            paddingLeft={20}
          >
            <p>
              Showing : {limit} of {countPokemon}
            </p>
            <Grid>
              {dataPokemon.map((d, i) => {
                return (
                  <Card key={i}>
                    <Link to={`/detail-pokemon/${d.id}`}>
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'center',
                          padding: '15px',
                        }}
                      >
                        <img
                          src={d.imageUrl}
                          alt="Gambar Pokemon"
                          width="120px"
                          height="120px"
                        />
                      </div>
                      <Title paddingTop={15} paddingBottom={15} align="center">
                        {d.name}
                      </Title>
                    </Link>
                  </Card>
                );
              })}
            </Grid>
          </Container>

          <Container
            paddingTop={30}
            paddingRight={20}
            paddingBottom={70}
            paddingLeft={20}
            center={true}
          >
            {loadingButton ? (
              <img
                src={LoadingCircle}
                alt="Loading"
                width="60px"
                height="60px"
              />
            ) : (
              <Fragment>
                {sizeDataPokemon >= limit && (
                  <Button onClick={seeMore}>See More</Button>
                )}
              </Fragment>
            )}
          </Container>
        </Fragment>
      )}
    </Fragment>
  );
};

export default ListPokemon;
