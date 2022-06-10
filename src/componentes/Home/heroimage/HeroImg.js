import React from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export default function Heroimg() {
  return (
    <div className="hero-img">
        <Container>
          <img
            src="https://images.unsplash.com/photo-1471506480208-91b3a4cc78be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1474&q=80"
            alt="Man riding a bicicle in a beautiful mountain scenery"
            className="img-fluid"
          />
          <Link to ="/catalogo">
            <Button id="btn-hero-img" variant="secondary" > Descubre más </Button>
          </Link>
        
        </Container>
    </div>
  );
}
