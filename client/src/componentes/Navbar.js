import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
/* import Perfil from './Perfil';
import MisReservas from './MisReservas'; */
import logo from './img/logotrans1.png';
import lupa from './img/icons/lupa.jpg';
import gorila from './img/icons/gorila.png';
import cesta from './img/icons/cesta.png';

export default function HomeNav () {
  const UserMenu = (
    <img
      src={gorila}
      alt="Icono gorila"
      /* roundedcircle */
      style={{ width: '40px' }}
    />
  )
  return(

    <div className="navbar">
    {/* LOGO + BARRA BÚSQUEDA + MONO + CESTA DE LA COMPRA 

    <img src="" alt="">Gorila</img>
      <DropdownMenu>Mi perfil<Perfil/> Mis reservas<MisReservas/> Logout</DropdownMenu>
      <img src="" alt="">Cesta</img> */}

      
        <Navbar bg="#" expand="lg" fixed="top">
          <Container>
            <Navbar.Brand href="#home"><img className="logo" src={logo} alt="Logo Econotravel Barcelona desde 2003"/> </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="all-nav">
                <Nav.Link  className="barra-busqueda" href="#home">Busca una actividad, un lugar,...<img className="icono-lupa" src={lupa} alt="Icono lupa"/></Nav.Link>
                
                {/*<NavDropdown title={UserMenu} id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Mi perfil</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Mis reservas</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.3">Logout</NavDropdown.Item>
                </NavDropdown>*/}

                <Nav.Link href="#link"><img className="icono-cesta" src={cesta} alt="Icono cesta de la compra"/> </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
  )
}

