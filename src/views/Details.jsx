import { useParams } from "react-router-dom";
import PokeCard from "../components/PokeCard";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

const Details = () => {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState({});
  const url = 'https://pokeapi.co/api/v2/pokemon';
  const getPokemons = async (name) => {
    try {
      const res = await fetch(`${url}/${name}`);
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await res.json();
      const src = data.sprites.other.dream_world.front_default;
      const stats = data.stats.map((stat) => ({
        name: stat.stat.name,
        base: stat.base_stat,
      }));
      const type = data.types.map(({ type }) => type.name).join(' ');
      setPokemon({name, stats, src, type})
    } catch (error) { 
      console.log(error);
    }
  };

useEffect(() =>{
  getPokemons(name);
}, [name]);


  return (
    <>
    <Container className="text-center ">

      <PokeCard pokemon={pokemon} />
    </Container>
    </>
  );
};

export default Details;
