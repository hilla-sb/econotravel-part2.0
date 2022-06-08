import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
/* import Perfil from './Perfil';
import MisReservas from './MisReservas'; */
import logo from '../images/Logo1.png';
import lupa from '../images/lupa.jpg';
import gorilaa from '../images/gorilaa.png';
import cestaa from '../images/cestaa.png'

export default function HomeNav () {
  const UserMenu = (
    <img
      src={gorilaa}
      alt="Icono gorila"
      roundedCircle
      style={{ width: '40px' }}
    />
  )
  return(

    <div className="navbar">
    {/* LOGO + BARRA BÚSQUEDA + MONO + CESTA DE LA COMPRA 

    <img src="" alt="">Gorila</img>
      <DropdownMenu>Mi perfil<Perfil/> Mis reservas<MisReservas/> Logout</DropdownMenu>
      <img src="" alt="">Cesta</img> */}

      
        <Navbar bg="#" expand="lg">
          <Container>
            <Navbar.Brand href="#home"><img src={logo} alt="Logo Econotravel Barcelona desde 2003"/> </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="all-nav">
                <Nav.Link  className="barra-busqueda" href="#home">Busca una actividad, un lugar,...<img className="icono-lupa" src={lupa} alt="Icono lupa"/></Nav.Link>
                
                <NavDropdown title={UserMenu} id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Mi perfil</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Mis reservas</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.3">Logout</NavDropdown.Item>
                </NavDropdown>

                <Nav.Link href="#link"><img className="icono-cesta" src={cestaa} alt="Icono cesta de la compra"/> </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
  )
}

