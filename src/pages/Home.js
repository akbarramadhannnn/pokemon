import { Fragment } from 'react';
import loadable from '@loadable/component';
import { LoadingCard } from 'components';
const ListPokemon = loadable(() => import('containers/ListPokemon'), {
  fallback: <LoadingCard />,
});

const Home = () => {
  return (
    <Fragment>
      <ListPokemon />
    </Fragment>
  );
};

export default Home;
