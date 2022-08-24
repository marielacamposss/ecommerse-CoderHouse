import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import LogoEcommerse from '../components/LogoEcommerse';
import IconoCarrito from './IconoCarrito';
import { useCartContext } from '../context/CartContext';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const NavbarEcommerse = () => {
  return (
    <>
    <div className="d-flex justify-content-around align-items-center mb-2">
    <Link to='/'>
      <LogoEcommerse/>
      </Link> 
    <Link to='/carro' className='Nolink'>
         <IconoCarrito/>
          </Link>
      </div>
    {['md'].map((expand) => (
      <Navbar key={expand} expand={expand} className="mb-3 NavBarStyle">
        <Container fluid className="d-flex justify-content-center">
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-md`}
            aria-labelledby={`offcanvasNavbarLabel-expand-md`}
            placement="end"

          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                Menu
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-center flex-grow-1 pe-3">
              <NavLink to='/' className="Nolink mx-3">
                <Nav.Link href="#action1" className='NavBarStyleText'>Inicio</Nav.Link>
              </NavLink>
              <NavLink to='/categoria/Plantas' className="Nolink mx-3">
                <Nav.Link href="#action2" className='NavBarStyleText'>Plantas</Nav.Link>
                </NavLink>
                <NavLink to='/categoria/Maceteros' className="Nolink mx-3">
                <Nav.Link href="#action3" className='NavBarStyleText'>Maceteros</Nav.Link>
                </NavLink>
                <NavLink to='/categoria/Accesorios' className="Nolink mx-3">
                <Nav.Link href="#action4" className='NavBarStyleText'>Accesorios</Nav.Link>
                </NavLink>

              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    ))}
  </>
    )
}

export default NavbarEcommerse