import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";


const NavbarPoke = () => {
  const activeClass = ({ isActive }) => (isActive ? "active" : undefined);
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary ">
        <Container>
          <Navbar.Brand as={Link} to="/" >React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink 
               to="/" 
               className={activeClass +" text-decoration-none m-3 goTo"} >
                Home
                </NavLink>
              <NavLink to="/pokemons" className={activeClass+"  text-decoration-none m-3 goTo"} >Pokemones</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarPoke;
