import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Catalogo from "./pages/Catalogo";
import Reserva from "./pages/Reserva";
import ComoFunciona from "./pages/ComoFunciona";
import ContactUs from "./pages/ContactUs";
import DetalleLogged from "./pages/DetalleLogged";
import MiPerfil from "./pages/MiPerfil";
import MisReservas from "./pages/MisReservas";
import Pago from "./pages/MetodosDePago";
import Registrate from "./pages/Registrate";
import Reserva from "./pages/Reserva";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/reserva" element={<Reserva />} />
          <Route path="/comofunciona" element={<ComoFunciona />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/detallelogged" element={<DetalleLogged />} />
          <Route path="/miperfil" element={<MiPerfil />} />
          <Route path="/misreservas" element={<MisReservas />} />
          <Route path="/metodosdepago" element={<Pago />} />
          <Route path="/registrate" element={<Registrate />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
import Detalle from "./componentes/Detalle";
import Detallelogged from "./pages/DetalleLogged";

export default App;
