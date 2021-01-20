import { useEffect, useState, Fragment } from 'react';
import { Container, Grid, Card, Title, Button, LoadingCard } from 'components';
import { GetDataPokemon } from 'api/pokemon';
import LoadingCircle from 'assets/icon/loading-circle.svg';

const ListPokemon = () => {
  const [limit, setLimit] = useState(20);
  const [dataPokemon, setDataPokemon] = useState([]);
  const [countPokemon, setCountPokemon] = useState(0);
  const [loadingDataPokemon, setLoadingDataPokemon] = useState(true);
  const [sizeDataPokemon, setSizeDataPokemon] = useState('');
  const [loadingButton, setLoadingButton] = useState(false);

  useEffect(() => {
    GetDataPokemon(limit)
      .then((response) => {
        const data = [];
        for (let i = 0; i < response.results.length; i++) {
          response.results[i].id = i + 1;
          response.results[
            i
          ].imageUrl = `https://pokeres.bastionbot.org/images/pokemon/${
            i + 1
          }.png`;
          data.push(response.results[i]);
        }
        setDataPokemon(data);
        setSizeDataPokemon(response.results.length);
        setCountPokemon(response.count);
        setLoadingDataPokemon(false);

        if (loadingButton) {
          setLoadingButton(false);
        }
      })
      .catch((error) => {
        setLoadingDataPokemon(false);
      });
  }, [limit, loadingButton]);

  const klikLihatLebihBanyak = () => {
    setLoadingButton(true);
    setLimit(limit + 20);
  };
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
              Show : {limit} of {countPokemon}
            </p>
            <Grid>
              {dataPokemon.map((d, i) => {
                return (
                  <Card key={i}>
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
                    <Title>{d.name}</Title>
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
                  <Button onClick={klikLihatLebihBanyak}>See More</Button>
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
