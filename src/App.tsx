import { Routes, Route } from "react-router-dom";
import { PokemonTeam } from "./components/PokemonTeam/PokemonTeam";
import { PokemonSearcher } from "./components/PokemonSearcher/PokemonSearcher";
import { PokemonDetail } from "./components/PokemonDetail/PokemonDetail";
import './App.scss'


function App() {
  return (
    <div className="App">
      <div className="row">
        <div className="col-8 content">
          <Routes>
            <Route path="/" element={<PokemonSearcher />} />
            <Route path="search" element={<PokemonSearcher />} />
            <Route path="detail/:pokemonId" element={<PokemonDetail />} />
          </Routes>
        </div>
        <div className="col-4">
          <PokemonTeam/>
        </div>
      </div>
      
      
    </div>
  );
}

export default App;
