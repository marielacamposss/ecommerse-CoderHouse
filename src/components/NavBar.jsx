import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import LogoEcommerse from '../components/LogoEcommerse';
import IconoCarrito from './IconoCarrito';
import { useCartContext } from '../context/CartContext';

const NavbarEcommerse = () => {
  const {cantidadTotal } = useCartContext()
  return (
    <Navbar bg="light" expand="lg">
    <Container>
    <Link to='/'>
      <LogoEcommerse/>
      </Link>
      <NavLink to='/'>
           </NavLink>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <NavLink to='/categoria/plantas'>
          <Nav.Link href="#home">Plantas</Nav.Link>
          </NavLink>
          <NavLink to='/categoria/maceteros'>
          <Nav.Link href="#link">Maceteros</Nav.Link>
          </NavLink>

          <NavDropdown title="Accesorios" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Macrame</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
             Fertilizantes
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Tutores</NavDropdown.Item>           
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
      <Link to='/carro'>
      {cantidadTotal() != 0 && `${cantidadTotal()}`}
      <IconoCarrito/>
      </Link>
    </Container>
  
  </Navbar>
    )
}

export default NavbarEcommerse