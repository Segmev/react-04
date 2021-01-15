import { createContext, useContext } from "react";

export const pokemonInitData = {
    id: 0,
    name: "",
    picture: "",
    description: "~~~~~~~~~~~~~~~",
}

export const PokemonContext = createContext(pokemonInitData);

export const PokemonContextProvider = PokemonContext.Provider;

export const usePokemonContext = () => {
    const context = useContext(PokemonContext);
    if (context === undefined) {
        throw new Error('The usePokemonContext is missing a Pokemon provider')
    }
    return context;
}

export default PokemonContext;