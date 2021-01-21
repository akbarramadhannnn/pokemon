import loadable from '@loadable/component';
import PokemonDetailProvider from 'context/PokemonDetailProvider';
const PokemonDetails = loadable(() => import('containers/PokemonDetail'));

const PokemonDetail = ({ match }) => {
  const idPokemon = match.params.idPokemon;
  return (
    <PokemonDetailProvider idPokemon={idPokemon}>
      <PokemonDetails />
    </PokemonDetailProvider>
  );
};

export default PokemonDetail;
