import './App.css';
import Navbar from './componentes/Navbar';
import experiencias from "./experiencias.json";
/* import Home from './componentes/Home';
import Login from './componentes/Login';
import Register from './componentes/Register';
import Catalogo from './componentes/Catalogo';
import Detalle from './componentes/Detalle';
import Reserva from './componentes/Reserva';
import DetalleLogged from './componentes/DetalleLogged';
import ContactUs from './componentes/ContactUs';
import Footer from './componentes/Footer'; */

function App() {
  
  console.log(experiencias);
  
  return (
    <div>
      
      
      <Navbar/>

      {/* <Home/>
      <Login/>
      <Register/>
      <Catalogo/> 
      <Detalle/>
      <Reserva/>
      <DetalleLogged/>
      <ContactUs/>
      <Footer/> */}
    </div>
  );
}


export default App;
