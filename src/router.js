import Home from 'pages/Home';
import PokemonDetail from 'pages/PokemonDetail';

const routes = [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/detail-pokemon/:idPokemon',
    component: PokemonDetail,
    exact: true,
  },
];

export default routes;
