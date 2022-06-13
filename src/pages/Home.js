import React from "react";
import Navbar from "../componentes/Navbar";
import HeroImg from "../componentes/HeroImg";
import Destacados from '../componentes/Destacados';
//import TravelAny from './componentes/TravelAny;
//import Descuento from "./componentes/heroimage/Descuento";
import Footer from "../componentes/Footer";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-pg">
      <Navbar />
      <HeroImg />
        <Link to="/catalogo">
          <h1>Experiencias en el área de Barcelona</h1>
        </Link>
        <Link to="/">Ubicación</Link>
        <Link to="/">Transporte</Link>
        <Link to="/">Duración</Link>
      <Destacados />

      {/*
       
        <TravelAny/>
        <Descuento/> */}
      <Footer />
    </div>
  );
}
