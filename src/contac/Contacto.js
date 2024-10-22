import React, { useEffect } from 'react';
import { faHome, faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './contacto.css';
import fondo from './imagen/fondo.jpg';
import logo from './imagen/logo.png';

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
            <nav>
                <input type="checkbox" name="" id="check"/>
                <label htmlFor="check" className="checkbtn"> {/* Cambié for a htmlFor */}
                    <FontAwesomeIcon icon={faBars} />
                    {/*<FontAwesomeIcon icon={faHome} />*/}
                </label>
                <a href="#" className="enlace"> <img src={logo} alt="cama1" width={70} height={70} /> </a>                
                <ul className="menu">                
                    <li><a href="/">Inicio</a></li>
                    <li><a href="/Servicios">Servicios</a></li>
                    <li><a href="">Contacto</a></li>  
                </ul>
            </nav>

            <footer>
                <div>                
                    <div className='pie'>
                        <h2>MUNDO SOLUCIONES NET</h2><br/>
                        <h3>Horario de atención:<br/>
                            Lunes de Viernes: 07:00am - 06:30pm<br/>
                            Sábados: 08:00am - 06:30am<br/>
                            <a className='contacto' target="_blank" rel="noopener noreferrer" 
                            href="https://wa.me/+573124191663">+57 312 419 1663</a><br/>
                            <a className='correo' targe="_black" rel="noopener noreferrer" href="mailto:mundosolucionesnet@gmail.com">mundosolucionesnet@gmail.com</a><br/>
                            Carrera 12 # 13-82 Centro <br/>
                            Florencia, Caquetá - Colombia <br/><br/>
                            Desarrollador: Jhon Tierradentro / <a className='contacto' target="_blank" rel="noopener noreferrer" href="https://wa.me/+573205119854">+573205119854</a><br/>
                            <a className='correo' target="_blank" rel="noopener noreferrer" href="mailto:jhonhtr@gmail.com">jhonhtr@gmail.com </a><br/>                
                            Derechos Reservados- Copyright 2024
                        </h3>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Contacto;
