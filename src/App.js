import './App.css';
import HomeNav from './componentes/nav/Navbar';
import Home from './componentes/home/Home';
import Destacados from './componentes/home/Destacados'; 
import Footer from './componentes/footer/Footer';
import { BrowserRouter } from 'react-router-dom'



function App() {
    
  return (
    <BrowserRouter>
     <Destacados/>
    </BrowserRouter>
  );
}


export default App;
