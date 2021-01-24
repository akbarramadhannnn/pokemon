import { createContext, useEffect, useState, useContext } from 'react';
import { GetDetailPokemon, GetInfoPokemon } from 'api/pokemon';
import { Context } from 'context';
export const PokemonDetailContext = createContext();

const PokemonDetailProvider = ({ children, idPokemon }) => {
  const { myPokemonList, setMyPokemonList } = useContext(Context);
  const [dataCatchPokemon, setDataCatchPokemon] = useState({});
  const [detailPokemon, setDetailPokemon] = useState({
    id: '',
    name: '',
    image: '',
    rate: [],
  });
  const [loadingData, setLoadingData] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [pokemonName, setPokemonName] = useState('');
  const [disabledSubmit, setDisabledSubmit] = useState(true);
  const [error, setError] = useState('');

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

  const catchPokemon = (data) => {
    setShowModal(true);
    setDataCatchPokemon({
      nama: data.name,
      image: data.image,
    });
  };

  const onChangePokemon = (e) => {
    const value = e.target.value;
    setPokemonName(value);
    if (value) {
      const filterMyPokemontList = myPokemonList.filter((item) => {
        const lowerCase = value.toLowerCase();
        return Object.keys(item.nama).some((key) =>
          item.nama.toLowerCase().includes(lowerCase)
        );
      });

      if (filterMyPokemontList.length > 0) {
        setError('name is available');
        setDisabledSubmit(true);
      } else {
        setError('');
        setDisabledSubmit(false);
      }
    } else {
      setError('');
      setDisabledSubmit(true);
    }
  };

  const onCloseModal = () => {
    setShowModal(false);
    setDataCatchPokemon({});
    setPokemonName('');
    setDisabledSubmit(true);
  };

  const submitPokemon = () => {
    if (pokemonName) {
      dataCatchPokemon.nama = pokemonName;
    }
    setMyPokemonList((state) => {
      state = [...state, dataCatchPokemon];
      return state;
    });
    setShowModal(false);
    setPokemonName('');
    setDisabledSubmit(true);
    setDataCatchPokemon({});
  };

  return (
    <PokemonDetailContext.Provider
      value={{
        detailPokemon,
        loadingData,
        submitPokemon,
        showModal,
        onCloseModal,
        catchPokemon,
        onChangePokemon,
        pokemonName,
        disabledSubmit,
        error,
      }}
    >
      {children}
    </PokemonDetailContext.Provider>
  );
};

export default PokemonDetailProvider;
