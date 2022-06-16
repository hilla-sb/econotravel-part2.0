import React, {useState} from 'react';
import data from '../experiencias.json';

import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
/* import Perfil from './Perfil';
import MisReservas from './MisReservas'; */
import logo from './img/logotrans1.png';
import lupa from './img/icons/lupa.jpg';
import gorila from './img/icons/gorila.png';
import cesta from './img/icons/cesta.png';

export default function HomeNav () {
  const [searchTerm, setSearchTerm] = useState("");
  return(
    <>
      <Nav className="navbar">
        <Link to='/' className="navbar-logo">
          <img className="logo" src={logo} alt="Logo Econotravel Barcelona desde 2003"/>
        </Link>
        
        
          <div className="searchInput">
            <input id="search-bar" type="text" placeholder="Busca una actividad, un lugar,..." onChange={(event) => {
              setSearchTerm(event.target.value);
            }} />
            <img className="icono-lupa" src={lupa} alt="Icono lupa"/>          
          </div>
          <div>
            {
              data
                .filter((val) => {
                  if(searchTerm == ""){
                    return val;
                  }else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
                    return val;
                  }
                })
                .map((val) => {
                  return(
                    <div className="template" key={val.id}>
                      
                      <h3>{val.title}</h3>
                      <p className="price">{val.price}</p>
                    </div>
                  )
                })
            }
          </div>

        
        {/* <Link className="">
          <img className="icono-gorila" src={gorila} alt="Icono gorila"/>
      

          <img className="icono-cesta" src={cesta} alt="Icono cesta de la compra"/>
        </Link>  */}
      </Nav>

      </>
  )
}


/* 
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';


const UserMenu = (
    <img src={gorila} alt="Icono gorila" roundedcircle 
      style={{ width: '40px' }}/>
  ) 



  LOGO + BARRA BÚSQUEDA + MONO + CESTA DE LA COMPRA 

    <img src="" alt="">Gorila</img>
      <DropdownMenu>Mi perfil<Perfil/> Mis reservas<MisReservas/> Logout</DropdownMenu>
      <img src="" alt="">Cesta</img> 

      
        <Navbar bg="#" expand="lg" fixed="top">
          <Container>
            <Navbar.Brand href="#home"><img className="logo" src={logo} alt="Logo Econotravel Barcelona desde 2003"/> </Navbar.Brand>
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

                <Nav.Link href="#link"><img className="icono-cesta" src={cesta} alt="Icono cesta de la compra"/> </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>   */