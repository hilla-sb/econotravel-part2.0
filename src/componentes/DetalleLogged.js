import react from 'react';
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';
import Perfil from './Perfil';
import MisReservas from './MisReservas';

export default function Detalle-logged () {
  return (
    <>
      <img src="" alt="">Gorila</img>
      <DropdownMenu>Mi perfil<Perfil/> Mis reservas<MisReservas/> Logout</DropdownMenu>
      <img src="" alt="">Cesta</img>


    </>
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