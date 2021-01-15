import { useState } from "react";
import { usePokemonContext } from "../contexts/PokemonContext";
import { fetchPokemonByName } from "../fetchers/pokemonApi";

export default function NameInput() {
  const [input, setInput] = useState("");
  const { dispatch } = usePokemonContext();

  return (
    <input
      onKeyDown={(e) =>
        e.key === "Enter" && fetchPokemonByName(input, dispatch)
      }
      onChange={(e) => setInput(e.target.value)}
    />
  );
}
