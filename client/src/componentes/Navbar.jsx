import React, { useState } from "react";
import data from "../experiencias.json";
import { Nav } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logotrans1.png";
import lupa from "../assets/icons/lupa.jpg";
import gorila from "../assets/icons/gorila.png";
import cesta from "../assets/icons/cesta.png";

export default function HomeNav() {
  let navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <Nav className="navbar">
        <Link to="/" className="navbar-logo">
          <img
            className="logo"
            src={logo}
            alt="Logo Econotravel Barcelona desde 2003"
          />
        </Link>

        <div className="searchInput">
          <input
            id="search-bar"
            type="text"
            placeholder="Busca una actividad, un lugar,..."
            onChange={(event) => {
              event.preventDefault();
              setSearchTerm(event.target.value);
            }}
          />
          <img
            className="icono-lupa"
            src={lupa}
            alt="Icono lupa"
            onClick={() => {
              navigate("/experiencias", { replace: true });
            }}
          />
        </div>
        <div>
          {searchTerm !== null &&
            data
              .filter((val) => {
                if (searchTerm == "") {
                  return val;
                } else if (
                  val.descripcion
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase())
                ) {
                  return val;
                }
              })
              .map((val) => {
                return (
                  <div className="template" key={val.id}>
                    <h3>{val.title}</h3>
                    <p className="price">{val.price}</p>
                  </div>
                );
              })}
        </div>

        <div className="iconos">
          <img className="icono-gorila" src={gorila} alt="Icono gorila" />
          <img
            className="icono-cesta"
            src={cesta}
            alt="Icono cesta de la compra"
          />
        </div>
      </Nav>
    </>
  );
}
