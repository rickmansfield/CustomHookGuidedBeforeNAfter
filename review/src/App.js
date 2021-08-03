import React from "react";
import "./styles.scss";

import SelectedPokemon from './components/SelectedPokemon';
import PokeList from './components/PokeList';
import usePokeState from './hooks/usePokeState';

function App() {
  const [pokemen, selectedPokemon, handlePoke] = usePokeState();

  return (
    <div className="App">
      <SelectedPokemon selectedPokemon={selectedPokemon} />
      <PokeList handlePoke={handlePoke} pokemen={pokemen} />
      {/* <SelectedPokemon selectedPokemon={selectedPokemon} />
      <PokeList handlePoke={handlePoke} pokemen={pokemen} /> */}
    </div>
  );
}

export default App;