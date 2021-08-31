import React from 'react'

export default function Pokemon(props) {
    const {handlePoke, pokemon} = props;
    return (
        <div>
            <div
                onClick={() => handlePoke(pokemon.id)}
                key={pokemon.id}
                className="pokemon"
            >
                <img src={pokemon.img} alt={pokemon.name} />
                <div>
                    <h3>{pokemon.name}</h3>
                    {pokemon.next_evolution &&
                        pokemon.next_evolution.map((e) => <p key={e.num}>{e.name}</p>)}
                </div>
            </div>
        </div>
    )
}
