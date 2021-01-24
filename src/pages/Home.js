import loadable from '@loadable/component';
import { LoadingList } from 'components';
import PokemonListProvider from 'context/PokemonListProvider';

const PokemonList = loadable(() => import('containers/PokemonList'), {
  fallback: <LoadingList />,
});

const Home = () => {
  return (
    <PokemonListProvider>
      <PokemonList />
    </PokemonListProvider>
  );
};

export default Home;
