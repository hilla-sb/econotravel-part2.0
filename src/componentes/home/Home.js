import React from "react";
import Navbar from "../nav/Navbar";
import HeroImg from "./heroimage/HeroImg";
import Destacados from "../home/Destacados";
import TravelAny from "./TravelAny";
import Descuento from "../home/heroimage/Descuento";
import Footer from "../footer/Footer";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-pg">
       <Navbar/>
       <HeroImg/>
       <Link to ="/catalogo">
          <h1>Experiencias en el área de Barcelona</h1>
        </Link>
            <Link to="/">Ubicación</Link>
            <Link to="/">Transporte</Link>
            <Link to="/">Duración</Link>
       <Destacados/>
       <TravelAny/>
       {/* <Descuento/> */}
       <Footer/>       
    </div>
  );
}
