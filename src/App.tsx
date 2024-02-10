import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './views/home/Home';
import Agendar from './views/Agendar/agendar'
import Consultar from './views/Consultar/consultar'
import Proveedores from './views/proveedores/proveedores'
import Parametros from './views/parametros/parametros'
import Formularios from './views/Formularios/formularios'


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/Home" element={<Home />}></Route>
              <Route path="*" element={<div>404 Not Found</div>}></Route>
              <Route path="/agendar" element={<Agendar />}></Route>
              <Route path="/consultar" element={<Consultar />}></Route>
              <Route path="/proveedores" element={<Proveedores />}></Route>
              <Route path="/parametros" element={<Parametros />}></Route>
              <Route path="/formularios" element={<Formularios />}></Route>
        </Routes>       
      </Router>
    </div>
  );
}

export default App;
