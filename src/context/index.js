import { createContext, useState } from 'react';
export const Context = createContext();

const Index = ({ children }) => {
  const [myPokemonList, setMyPokemonList] = useState([]);

  const removePokemon = (index) => {
    let state = [...myPokemonList];
    state.splice(index, 1);
    setMyPokemonList(state);
  };

  return (
    <Context.Provider
      value={{ myPokemonList, setMyPokemonList, removePokemon }}
    >
      {children}
    </Context.Provider>
  );
};

export default Index;
