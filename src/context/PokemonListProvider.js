import { useState, createContext, useEffect } from 'react';
import { GetDataPokemon } from 'api/pokemon';
export const PokemonListContext = createContext();

const PokemonListProvider = ({ children }) => {
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

  const seeMore = () => {
    setLoadingButton(true);
    setLimit(limit + 20);
  };

  return (
    <PokemonListContext.Provider
      value={{
        limit,
        dataPokemon,
        countPokemon,
        loadingDataPokemon,
        sizeDataPokemon,
        loadingButton,
        seeMore
      }}
    >
      {children}
    </PokemonListContext.Provider>
  );
};

export default PokemonListProvider;
