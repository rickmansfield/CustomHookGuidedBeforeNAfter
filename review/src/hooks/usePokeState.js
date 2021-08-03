import { useState, useEffect } from 'react';
import { getPokemon, getPokemen } from './../services/PokeService';

const usePokeState = () => {
  const [pokemen, setPokemen] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState({});

  useEffect(() => {
    setPokemen(getPokemen());
  }, []);

  const handlePoke = (id) => {
    getPokemon(id)
      .then(data => {
        setSelectedPokemon(data);
      })
  };

  return ([pokemen, selectedPokemon, handlePoke]);
}

export default usePokeState;