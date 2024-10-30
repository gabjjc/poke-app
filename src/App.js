import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/navbar/navbar";
import Home from "./pages/Home";
import Features from "./pages/Features";
import Match from "./pages/Match";

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Features" element={<Features />} />
          <Route path="/Match" element={<Match />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
