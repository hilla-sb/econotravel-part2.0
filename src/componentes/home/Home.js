import React from "react";
import Navbar from "../nav/Navbar";
import HeroImg from "./heroimage/HeroImg";
import Destacados from "../Catalogo/Destacados";
import TravelAny from "./TravelAny";
import Descuento from "./Descuento";
import Footer from "../footer/Footer";

export default function Home() {
  return (
    <div className="home-pg">
        <Navbar />
        <HeroImg />
        <Destacados />
        <TravelAny />
        <Descuento />
        <Footer />
    </div>
  );
}
