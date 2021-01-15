import { usePokemonContext } from '../contexts/PokemonContext';

export default function PokemonDescription() {
    const { pokemon } = usePokemonContext();

    return (
        <>{pokemon.description}</>
    )
}