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
        ##############################
        <div>
          <PokemonPicture />
        </div>
        ##############################
        <div>
          <PokemonDescription />
        </div>
        ===============================
        <div>
          <div>Taper le nom d'un pokemon</div>
          <PokemonNameInput />
        </div>
      </Pokedex>
    </div>
  );
}

export default App;
