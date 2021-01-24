import { useContext } from 'react';
import { Context } from 'context';
import { Fragment, useState } from 'react';
import {
  SwitchWrapper,
  DrawerWrapper,
  ContentArea,
  ListArea,
  CloseArea,
  HeadingArea,
  List,
  Grid,
  Card,
  NotFound,
  AreaButtonRemove,
  Icon,
} from './SwitchStyle';
import { Title } from 'components';

const Index = () => {
  const { myPokemonList, removePokemon } = useContext(Context);
  const [showDrawer, setDrawer] = useState(false);

  const klikShowDrawer = () => {
    const body = document.body;
    body.style.overflowY = 'hidden';
    setTimeout(() => {
      setDrawer(true);
    }, 100);
  };

  const klikCloseDrawer = () => {
    const body = document.body;
    body.style.overflowY = 'scroll';
    setTimeout(() => {
      setDrawer(false);
    }, 100);
  };

  return (
    <Fragment>
      {showDrawer && (
        <DrawerWrapper>
          <ListArea>
            <ContentArea>
              <CloseArea onClick={klikCloseDrawer}>
                <p>Close</p>
              </CloseArea>

              <HeadingArea>
                <h1>My Pokemon List</h1>
              </HeadingArea>

              <List>
                {!myPokemonList.length > 0 ? (
                  <NotFound>
                    <h4>Data Not Found</h4>
                  </NotFound>
                ) : (
                  <Grid>
                    {myPokemonList.map((m, i) => {
                      return (
                        <Card key={i}>
                          <AreaButtonRemove>
                            <button onClick={() => removePokemon(i)}>
                              &times;
                            </button>
                          </AreaButtonRemove>
                          <div
                            style={{
                              display: 'flex',
                              justifyContent: 'center',
                              padding: '15px',
                            }}
                          >
                            <img src={m.image} alt="Gambar Pokemon" />
                          </div>
                          <Title
                            paddingTop={5}
                            paddingBottom={10}
                            align="center"
                            fontSize={25}
                          >
                            {m.nama}
                          </Title>
                        </Card>
                      );
                    })}
                  </Grid>
                )}
              </List>
            </ContentArea>
          </ListArea>
        </DrawerWrapper>
      )}
      {!showDrawer && (
        <SwitchWrapper onClick={klikShowDrawer}>
          <Icon>
            <div style={{ width: '100%' }}>
              <span />
              <span />
              <span />
            </div>
          </Icon>
        </SwitchWrapper>
      )}
    </Fragment>
  );
};

export default Index;
