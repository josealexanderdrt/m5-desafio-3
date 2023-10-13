import { Route, Routes } from "react-router-dom";
import NavbarPoke from "./components/NavbarPoke";
import Home from "./views/Home";
import Pokemons from "./views/Pokemons";
import Details from "./views/Details";
import NotFound from "./views/NotFound";
import "./App.css";

function App() {
  return (
    <>
      <NavbarPoke/>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/pokemons" element={<Pokemons/>} />

        <Route path="/pokemons/:name" element={<Details/>} />

        <Route path="*" element={<NotFound/>} />




      </Routes>
    </>
  );
}

export default App;
