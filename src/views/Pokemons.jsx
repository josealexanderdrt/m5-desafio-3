import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, Spinner } from "react-bootstrap";
import Swal from 'sweetalert2';


const Pokemons = () => {
  const [pokemones, setPokemones] = useState([]);
  const [pokemonesSelected, setPokemonesSelected] = useState("");
  const navigate = useNavigate();

  const url = "https://pokeapi.co/api/v2/pokemon";
  const getPokemons = async () => {
    const rest = await fetch(url);
    const { results } = await rest.json();
    setPokemones(results);
  };

  const goToPokemonDetails = async() =>{
    pokemonesSelected? navigate(`/pokemons/${pokemonesSelected}`) : Swal.fire('Debes Seleccionar un Pokemon!')
    ; 
  }

  useEffect(() => {
    getPokemons();
  }, []);

  return (
    <>
      <Container>
        <div className="mt-5 text-center">
          <h1>Selecciona un Pokemon </h1>
          <div className="col-5 col-sm-3 col-lg-2 mx-auto">
            <select 
            value={pokemonesSelected} 
            onChange={({target})=> setPokemonesSelected(target.value)}
            name="" id="" className="form-select text-center">
              <option value="" disabled>
                 Pokemons
              </option>
              {pokemones.map(({ name }, i) => (
                <option key={i} value={name}>
                  {name}
                </option>
              ))}
            </select>
            <Button variant="dark" className="mt-3" onClick={goToPokemonDetails}>
              Details
            </Button>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Pokemons;
