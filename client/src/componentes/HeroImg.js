import React from "react";
import { Button } from "react-bootstrap";

export default function Heroimg() {
  return (
    <div className="card">
      <div className="heroimg">
        <img
          className="hero-image"
          src="https://images.unsplash.com/photo-1595954421407-ad5e012b25e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1933&q=80"
          alt="Barcelona's Montjuic"
        />
      </div>

      <div className="descubremas">
        <Button className="btn-heroimg" href="/catalogo">
          DESCUBRE MÁS
        </Button>{" "}
      </div>
    </div>
  );
}
