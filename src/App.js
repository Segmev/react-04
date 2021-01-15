import logo from "./logo.svg";
import "./App.css";
import Pokedex from "./components/Pokedex";
import PokemonPicture from "./components/PokemonPicture";

function App() {
  return (
    <div className="App">
      <Pokedex>
        <PokemonPicture />
      </Pokedex>
    </div>
  );
}

export default App;
