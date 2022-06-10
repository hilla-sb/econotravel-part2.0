import "./App.css";
import Home from "./componentes/home/Home";
import Destacados from "./componentes/home/Destacados";
import Footer from "./componentes/footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Catalogo from "./componentes/catalogo/Catalogo";
import { Navbar } from "react-bootstrap";
import Detalle from "./componentes/Detalle/Detalle";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
        <Route path="/" element={<Home/>} />         
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
