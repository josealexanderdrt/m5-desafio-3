import HomeImg from "../assets/img/picachu_1.png";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Container className="text-center boxHome">
        <h1>Bienvenido Maestro Pokemon</h1>
    
          <Link to="/pokemons">
            <figure>
              <img
                src={HomeImg}
                className="imgHome"
                alt="Image Pokemon Name: Picachu"
                title="Pokemon Name: Picachu"
              />
            
            </figure>
          </Link>
      
      </Container>
    </>
  );
};

export default Home;
