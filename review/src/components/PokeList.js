import React from "react";
import "./../styles.scss";
import Pokemon from "./Pokemon";

function PokeList(props) {
  const { pokemen, handlePoke } = props;

  return (
    <div id="pokeList">
      {pokemen.map((pokemon) => (
        <Pokemon handlePoke={handlePoke} pokemon={pokemon}/>
        // <div
        //   onClick={() => handlePoke(pokemon.id)}
        //   key={pokemon.id}
        //   className="pokemon"
        // >
        //   <img src={pokemon.img} alt={pokemon.name} />
        //   <div>
        //     <h3>{pokemon.name}</h3>
        //     {pokemon.next_evolution &&
        //       pokemon.next_evolution.map((e) => <p key={e.num}>{e.name}</p>)}
        //   </div>
        // </div>
      ))}
    </div>
  );
}

export default PokeList;