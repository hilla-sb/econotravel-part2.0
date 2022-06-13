import "./App.css";
import Home from "./componentes/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Catalogo from "./pages/Catalogo";
import Reserva from "./pages/Reserva";
import DetalleLogged from "./pages/DetalleLogged";
//import MiPerfil from "./pages/MiPerfil";
//import MisReservas from "./pages/MisReservas";
import ComoFunciona from "./pages/ComoFunciona";
import QuienesSomos from "./pages/QuienesSomos";
import Pago from "./pages/MetodosDePago";
import Registrate from "./pages/Registrate";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/reserva" element={<Reserva />} />
          <Route path="/detallelogged" element={<DetalleLogged />} />
          <Route path="/registrate" element={<Registrate />} />

          {/*Footer*/}
          <Route path="/comofunciona" element={<ComoFunciona />} />
          <Route path="/quienessomos" element={<QuienesSomos />} />
          <Route path="/metodosdepago" element={<Pago />} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
