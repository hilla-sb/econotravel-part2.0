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

<<<<<<< HEAD
// return (
//   <BrowserRouter>
//     <div className="App">
//       <Routes>
//         <Route path="/" element={<MainPage />} />
//         <Route path="experiences" element={<ExperiencePage />} />
//          <Route path="profile" element={<Profile />} />
//       </Routes>
//     </div>
//   </BrowserRouter>



=======
>>>>>>> 4fbe6be4406fc123543ee02e6101493db821447f
export default App;
