//HOLAAAAAAAAAA!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//Holiiii coliflori!!!!!
import './App.css';
import Navbar from './componentes/Nav.js/Navbar';
import HomePg from './componentes/HomePg';
/* import HeroImg from './componentes/HomePg/Hero-img'; */
import Destacados from './componentes/Catalogoo.js/Destacados';
/*import Login from './componentes/Login';
import Register from './componentes/Register'; */
import Catalogo from './componentes/Catalogoo.js/Catalogo'; 
import Detalle from './componentes/Detalle';
/*import Reserva from './componentes/Reserva';
import DetalleLogged from './componentes/DetalleLogged';
import ContactUs from './componentes/ContactUs';
import Footer from './componentes/Footer'; */

function App() {
  return (
    <div>
     <Navbar/>
     <HomePg/>
     {/* <HeroImg/> */}
     <Destacados/> 
     {/* <Login/>
     <Register/>  */}
     <Catalogo/> 
     <Detalle/>
     {/*<Reserva/>
     <DetalleLogged/>
     <ContactUs/>
     <Footer/> */}
    </div>
  );
}

export default App;
