import { createContext, useEffect, useState } from 'react';
import { GetDetailPokemon } from 'api/pokemon';
export const PokemonDetailContext = createContext();

const PokemonDetailProvider = ({ children, idPokemon }) => {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');

  useEffect(() => {
    GetDetailPokemon(idPokemon).then((response) => {
      setImage(
        `https://pokeres.bastionbot.org/images/pokemon/${idPokemon}.png`
      );
      setName(response.name);
    });
  }, [idPokemon]);

  return (
    <PokemonDetailContext.Provider value={{ name, image }}>
      {children}
    </PokemonDetailContext.Provider>
  );
};

export default PokemonDetailProvider;
