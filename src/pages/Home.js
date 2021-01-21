import loadable from '@loadable/component';
import { LoadingCard } from 'components';
import PokemonListProvider from 'context/PokemonListProvider';

const PokemonList = loadable(() => import('containers/PokemonList'), {
  fallback: <LoadingCard />,
});

const Home = () => {
  return (
    <PokemonListProvider>
      <PokemonList />
    </PokemonListProvider>
  );
};

export default Home;
