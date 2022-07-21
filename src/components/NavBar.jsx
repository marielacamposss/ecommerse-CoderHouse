import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import LogoEcommerse from '../components/LogoEcommerse';
import IconoCarrito from './IconoCarrito';

const NavbarEcommerse = () => {
  return (
    <Navbar bg="light" expand="lg">
    <Container>
    <Link to='/'>
      <LogoEcommerse/>
      </Link>
      <NavLink to='/'>
           <Navbar.Brand href="#home">Ecommerse Plantera</Navbar.Brand>
           </NavLink>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <NavLink to='/categoria/plantas'>
          <Nav.Link href="#home">plantas</Nav.Link>
          </NavLink>
          <NavLink to='/categoria/maceteros'>
          <Nav.Link href="#link">Maceteros</Nav.Link>
          </NavLink>

          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
      <Link to='/carro'>
      <IconoCarrito/>
      </Link>
    </Container>
  
  </Navbar>
    )
}

export default NavbarEcommerse