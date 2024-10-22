import React, { useEffect } from 'react';
import './contacto.css';
import fondo from './imagen/fondo.jpg';

const Contacto = () => {
    useEffect(() => {
        document.body.style.backgroundImage = `url(${fondo})`; // Usa la variable renombrada        
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundAttachment = "fixed";

    // Limpieza al desmontar el componente
        return () => {
        document.body.style.backgroundImage = ""; // Restablece el fondo
        };
        }, 
    []); // El segundo argumento vacío asegura que esto se ejecute solo una vez al montar

    return (
        <div>        
            <ul className="menu">
                <li><a href="/">Inicio</a></li>
                <li><a href="/Servicios">Servicios</a></li>
                <li><a href="">Contacto</a></li>
            </ul>

            

            <footer>
                
            </footer>           
        </div>
    );
};

export default Contacto;