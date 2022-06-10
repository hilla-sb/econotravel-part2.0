import React from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Routes } from "react-router-dom";
import Catalogo from "../../catalogo/Catalogo";

export default function Heroimg() {
  return (
    <div className="hero-img">
      <Routes>
        <Container>
          <img
            src="https://images.unsplash.com/photo-1471506480208-91b3a4cc78be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1474&q=80"
            alt="Man riding a bicicle in a beautiful mountain scenery"
            className="img-fluid"
          />

            <Button id="btn-hero-img" variant="secondary" onClick={Catalogo}> Descubre más </Button>
        
        </Container>
      </Routes>
    </div>
  );
}
