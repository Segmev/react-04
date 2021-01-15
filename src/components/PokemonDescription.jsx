import { usePokemonContext } from '../contexts/PokemonContext';

export default function PokemonDescription() {
    const { pokemon } = usePokemonContext();

    console.log(pokemon);

    return (
        <>{pokemon.description}</>
    )
}