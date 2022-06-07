import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
/* import Perfil from './Perfil';
import MisReservas from './MisReservas'; */
import logo from './images/Logo1.png';

export default function HomeNav () {
  return(
    <>
    {/* LOGO + BARRA BÚSQUEDA + MONO + CESTA DE LA COMPRA 

    <img src="" alt="">Gorila</img>
      <DropdownMenu>Mi perfil<Perfil/> Mis reservas<MisReservas/> Logout</DropdownMenu>
      <img src="" alt="">Cesta</img> */}

      <div className="navbar">
        <Navbar bg="#" expand="lg">
          <Container>
            <Navbar.Brand href="#home"><img src={logo} alt="Logo Econotravel Barcelona desde 2003"/> </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Busca una actividad, un lugar,...</Nav.Link>
                <Nav.Link href="#link">Link "Gorila"</Nav.Link>
                <Nav.Link href="#link">Link "Cesta compra"</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  )
}