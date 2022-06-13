import "./App.css";
import Home from "./componentes/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/" element={<Cata/>} />         

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
