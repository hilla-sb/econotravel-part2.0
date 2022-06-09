import './App.css';
import HomeNav from './componentes/nav/Navbar';
import Home from './componentes/home/Home';
//import Destacados from './componentes/home/Destacados'; 
//import Footer from './componentes/footer/Footer';


function App() {
    
  return (
    <div>
     <HomeNav/>
     <Home/>
     {/* <Destacados/
     <Footer/> */}
    </div>
  );
}


export default App;
