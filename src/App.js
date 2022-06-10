import "./App.css";
import Home from "./componentes/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Catalogo from "./componentes/catalogo/Catalogo";
import Reserva from './componentes/catalogo/Reserva';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/catalogo" element={<Catalogo/>} /> 
        <Route path="/reserva" element={<Reserva/>} />        
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
