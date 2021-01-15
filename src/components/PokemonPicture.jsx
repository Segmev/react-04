
import { usePokemonContext } from '../contexts/PokemonContext';

export default function PokemonPicture() {
    const { pokemon } = usePokemonContext();

    return (
        <img alt="pokemon figure" src={pokemon.picture} />
    )
}