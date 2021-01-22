import { createContext, useState } from 'react';
export const Context = createContext();

const Index = ({ children }) => {
  const [myPokemonList, setMyPokemonList] = useState([]);
  return (
    <Context.Provider value={{ myPokemonList, setMyPokemonList }}>
      {children}
    </Context.Provider>
  );
};

export default Index;
