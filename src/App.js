import './App.css';
import HomeNav from './componentes/nav/Navbar';
import Home from './componentes/home/Home';
import Destacados from './componentes/home/Destacados'; 
import Footer from './componentes/footer/Footer';
import { BrowserRouter, Route } from 'react-router-dom'
import Catalogo from './componentes/catalogo/Catalogo';
import { Navbar } from 'react-bootstrap';



function App() {
    
  return (
    <BrowserRouter>
      <Navbar/>
      <Home/>
      <Destacados/>
      <h1>catalogooooooooooooooooooooooooo</h1>
      <Catalogo/>
      <Footer/>
    </BrowserRouter>
  );
}

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



export default App;
