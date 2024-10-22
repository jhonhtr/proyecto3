import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Inicio from './inicio/Inicio';
import Servicios from './servi/Servicios';
import Contacto from './contac/Contacto';

function App () {
  return (
    <Router>
      <Routes>      
        {/* Cambiamos la ruta a "/inicio" y corregimos el uso del componente Inicio */}
        < Route path="/" element={<Inicio />} />
        <Route path="Servicios" element={<Servicios />} />
        <Route path="Contacto" element={<Contacto />} />        
      </Routes>
    </Router> 
  );
} 

export default App; 