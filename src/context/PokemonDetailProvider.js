import { createContext, useEffect, useState } from 'react';
import { GetDetailPokemon, GetInfoPokemon } from 'api/pokemon';
export const PokemonDetailContext = createContext();

const PokemonDetailProvider = ({ children, idPokemon }) => {
  const [detailPokemon, setDetailPokemon] = useState({
    id: '',
    name: '',
    image: '',
    rate: [],
  });
  const [loadingData, setLoadingData] = useState(false);

  useEffect(() => {
    const FetchData = async () => {
      setLoadingData(true);
      try {
        const detail = await GetDetailPokemon(idPokemon);
        const info = await GetInfoPokemon(idPokemon);

        setDetailPokemon({
          id: idPokemon,
          name: detail.name,
          image: `https://pokeres.bastionbot.org/images/pokemon/${idPokemon}.png`,
          rate: info.stats,
        });

        setLoadingData(false);
      } catch (e) {
        console.log(e);
      }
    };
    FetchData();
  }, [idPokemon]);

  return (
    <PokemonDetailContext.Provider value={{ detailPokemon, loadingData }}>
      {children}
    </PokemonDetailContext.Provider>
  );
};

export default PokemonDetailProvider;
