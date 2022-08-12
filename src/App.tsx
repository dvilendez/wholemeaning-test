import { Navbar } from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import { PokemonList } from "./components/PokemonList/PokemonList";
import { PokemonReady } from "./components/PokemonReady/PokemonReady";
import { PokemonSearcher } from "./components/PokemonSearcher/PokemonSearcher";
import { PokemonDetail } from "./components/PokemonDetail/PokemonDetail";


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="row">
        <div className="col-8">
          <Routes>
            <Route path="/" element={<PokemonSearcher />} />
            <Route path="search" element={<PokemonSearcher />} />
            <Route path="detail/:id" element={<PokemonDetail />} />
          </Routes>
        </div>
        <div className="col-4">
          <PokemonReady/>
        </div>
      </div>
      
      
    </div>
  );
}

export default App;
