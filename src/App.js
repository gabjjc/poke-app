import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/navbar/navbar";
import Home from "./pages/Home";
import Features from "./pages/Features";
import Match from "./pages/Match";
import { useState } from "react";
import  CurrentPokemonContext  from "./components/CustomContext";


function App() {
  const [currentPokemon, setCurrentPokemon] = useState(null);

  return (
    <div className="App">
      <CurrentPokemonContext.Provider
        value={{
          currentPokemon, 
          setCurrentPokemon,
        }}
      >
        <Navbar />
        <header className="App-header">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Features" element={<Features />} />
            <Route path="/Match" element={<Match />} />
          </Routes>
        </header>
      </CurrentPokemonContext.Provider>
    </div>
  );
}

export default App;
