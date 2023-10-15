import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
import { useEffect, useState } from "react";

const PokeCard = ({ pokemon }) => {
  const { name, stats, src, types } = pokemon;
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  
  useEffect(() => {

    setTimeout(() => {
      setIsLoading(false);
    }, 1000); 
  }, []); 

  const handleClick = () => {
    navigate(`/pokemons`);
  };

  return (
    <>
           <section className="containerPoke text-center ">
        <Card style={{ width: "18rem" }}>
          {isLoading ? (
            <Loading />
          ) : (
            <>
              <Card.Img variant="top" src={src} />
                 </>
          )}
              <Card.Body>
                <Card.Title> {name}</Card.Title>
                <Card.Text>
                  {stats?.map((stat, i) => (
                    <li key={i}>
                      {stat.name}: {stat.base}
                    </li>
                  ))}
                </Card.Text>
                <Card.Text>{types}</Card.Text>
              </Card.Body>
         
          <Button variant="dark" className="mt-3" onClick={handleClick}>
            Back
          </Button>
        </Card>
      </section>
    </>
  );
};

export default PokeCard;