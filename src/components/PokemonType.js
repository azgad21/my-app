import axios from "axios";
import React, { useEffect, useState } from "react";

const PokemonType = () => {
  const [pokemonType, setPokemonType] = useState({});
  const [id, setId] = useState("");

  useEffect(() => {
    // del 1 al 18
    const random = Math.floor(Math.random() * 18) + 1;
    axios
      .get(`https://pokeapi.co/api/v2/type/${random}/`)
      .then((res) => setPokemonType(res.data));
  }, []);

  console.log(pokemonType);

  const searchType = () => {
    console.log(id);
    axios
      .get(`https://pokeapi.co/api/v2/type/${id}/`)
      .then((res) => setPokemonType(res.data));
  };

  return (
    <div>
      <h1>{pokemonType.name}</h1>
      <div>
        <input type="text" onChange={(e) => setId(e.target.value)} value={id} />
        <button onClick={searchType}>Buscar</button>

        <ul>
          {pokemonType.pokemon?.map((pokemon) => (
            // (pokemon.pokemon.url) Es diferente en la de rick y morty
            <li key={pokemon.pokemon.url}>{pokemon.pokemon.url}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PokemonType;
