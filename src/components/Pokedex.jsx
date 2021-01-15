import { useReducer } from "react";
import {
  pokemonInitData,
  PokemonContextProvider,
} from "../contexts/PokemonContext";

const pokemonStateReducer = (state, { action, params }) => {
  console.log({ action, params });
  switch (action) {
    case "setPokemon":
      const { pokemon } = params;
      return { ...state, ...getPokemonFromData(pokemon) };
    case "setPokemonDescription":
      const { description } = params;
      return { ...state, description };
    default:
      throw new Error(`pokemonStateReducer: action ${action} undefined`);
  }
};

function getPokemonFromData(pokemonData) {
  const { name, id, sprites } = pokemonData;
  return { ...pokemonInitData, id, name, picture: sprites?.front_default };
}

export default function Pokedex({ children }) {
  const [pokemon, dispatch] = useReducer(pokemonStateReducer, pokemonInitData);

  return (
    <PokemonContextProvider value={{ pokemon, dispatch }}>
      {children}
    </PokemonContextProvider>
  );
}
