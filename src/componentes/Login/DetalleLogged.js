import React from 'react';
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';
import Perfil from './perfil-opcional/Perfil';
import MisReservas from '../nav/perfil-opcional/MisReservas';

export default function Detallelogged () {
  return (
    <div className="detallelog">
        <img src="" alt="">Gorila</img>
        <DropdownMenu>Mi perfil<Perfil/> Mis reservas<MisReservas/> Logout</DropdownMenu>
        <img src="" alt="">Cesta</img>
    </div>
    )
  }

  {/* <div className="navbar">
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home"><img src={logo} alt="Logo Econotravel Barcelona desde 2003"/> </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Busca una actividad, un lugar,...</Nav.Link>
                <Nav.Link href="#link">Link "Gorila"</Nav.Link> 


                <NavDropdown title="Link Gorila" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Mi perfil</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Mis reservas</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Logout</NavDropdown.Item>
                  <NavDropdown.Divider />
                </NavDropdown>


                <Nav.Link href="#link">Link "Cesta compra"</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>  */}