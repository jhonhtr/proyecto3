import React, { useEffect } from 'react';
import { faHome, faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Inicio.css';
import fondo from './imagen/fondo.jpg';
import logo from './imagen/logo.png';

const Inicio = () => {
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

            <nav>
                <input type="checkbox" name="" id="check"/>
                <label htmlFor="check" className="checkbtn"> {/* Cambié for a htmlFor */}
                    <FontAwesomeIcon icon={faBars} />
                    {/*<FontAwesomeIcon icon={faHome} />*/}
                </label>
                <a href="#" className="enlace"> <img src={logo} alt="cama1" width={70} height={70} /> </a>                
                <ul className="menu">                
                    <li><a href="">Inicio</a></li>
                    <li><a href="/Servicios">Servicios</a></li>
                    <li><a href="/Contacto">Contacto</a></li>  
                </ul>
            </nav>
             
             {/*<nav>
                <input type="checkbox" name="" id="check"/>
                <label for="check" class="checkbtn">
                    <FontAwesomeIcon icon={faHome} />
                    {/*<FontAwesomeIcon icon="fa-solid fa-bars" />*/}
                {/*</label>
                <a href="#" class="enlace"> <img src={logo} alt="cama1" width={70} height={70} /> </a>                
                <ul className="menu">                
                    <li><a href="">Inicio</a></li>
                    <li><a href="/Servicios">Servicios</a></li>
                    <li><a href="/Contacto">Contacto</a></li>  
                </ul>
            </nav>*/}        

            <footer>
                
            </footer>
        </div>
    );
};

export default Inicio; 
