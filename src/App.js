import logo from "./logo.svg";
import "./App.css";
import Pokedex from "./components/Pokedex";
import PokemonPicture from "./components/PokemonPicture";
import PokemonNameInput from "./components/PokedexNameInput";
import PokemonDescription from "./components/PokemonDescription";

function App() {
  return (
    <div className="App">
      <Pokedex>
        <PokemonPicture />
        <PokemonDescription/>
        <PokemonNameInput />
      </Pokedex>
    </div>
  );
}

export default App;
