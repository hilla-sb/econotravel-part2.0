import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Catalogo from "../../pages/Catalogo";

/* import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'; */

export default function Heroimg() {
  
  return (
    <div className="hero-img">
      <img
        className="hero-image"
        src="https://images.unsplash.com/photo-1595954421407-ad5e012b25e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1933&q=80"
        alt="Barcelona's Montjuic"
      />
      
      <Link to={Catalogo}>
        <Button className="descubre-mas" variant="secondary">
          Descubre más
        </Button>{" "}
      </Link>
      
    </div>
  );
}
