import './App.css';
import HomeNav from './componentes/nav/Navbar';
import Home from './componentes/home/Home';
import Destacados from './componentes/home/Destacados'; 
import Footer from './componentes/footer/Footer';
import { BrowserRouter } from 'react-router-dom'
import Catalogo from './componentes/catalogo/Catalogo';
import { Navbar } from 'react-bootstrap';



function App() {
    
  return (
    <BrowserRouter>
      <Navbar/>
      <Destacados/>
      <h1>catalogooooooooooooooooooooooooo</h1>
      <Catalogo/>
    </BrowserRouter>
  );
}


export default App;
