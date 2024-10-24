import React, { useEffect } from 'react';
import { faHome, faBars, faLocation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'; // Importa el icono de WhatsApp
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';  // Para el icono de correo
import './Servicios.css';
import fondo from './imagen/fondo.jpg';
import logo from './imagen/logo.png';

const Servicios = () => {
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
                <a href="https://mundosolucionesnet.vercel.app/" className="enlace"> <img src={logo} alt="cama1" width={70} height={70} /> </a>
                <ul className="menu">                
                    <li><a href="/">Inicio</a></li>
                    <li><a href="">Servicios</a></li>
                    <li><a href="/Contacto">Contacto</a></li>  
                </ul>
            </nav>

            <div className='inicio1'>
                    <div className="texto-inicio">
                        <h1>Servicios</h1>
                    </div>                    
            </div>

            <div className='serviciogeneral'>
                
                <div className='servicio1'>
                    <div className="texto-servicio">
                        Fotocopias a blanco y negro y color.
                    </div>                    
                </div>

                <div className='servicio1'>
                    <div className="texto-servicio">
                        Elaboración y envío de diversos documentos tanto personales como de trabajo.
                    </div>                    
                </div>

                <div className='servicio1'>
                    <div className="texto-servicio">
                        Asesorías en documentación ante entidades públicas y privadas.
                    </div>                    
                </div>

                <div className='servicio1'>
                    <div className="texto-servicio">
                        Digitalización de textos, oficios, poderes, autorizaciones, derechos de petición, trámites virtuales, compraventas, testamentos.
                    </div>                    
                </div>
            </div>

            <div className='serviciogeneral'>
                
                <div className='servicio1'>
                    <div className="texto-servicio">
                        Impresión tanto láser como de inyección de tinta.
                    </div>                    
                </div>

                <div className='servicio1'>
                    <div className="texto-servicio">
                        Búsqueda de trabajo y envío de Hoja de Vida.
                    </div>                    
                </div>

                <div className='servicio1'>
                    <div className="texto-servicio">
                        Respaldo de archivos en CD, rotulación en CDs.
                    </div>                    
                </div>

                <div className='servicio1'>
                    <div className="texto-servicio">
                    Uso y capacitación técnica de las aplicaciones más comunes del mercado.
                    </div>                    
                </div>
            </div>

            <div className='serviciogeneral'>
                
                <div className='servicio1'>
                    <div className="texto-servicio">
                        Expedición de certificados de libertad y tradición.
                    </div>                    
                </div>

                <div className='servicio1'>
                    <div className="texto-servicio">
                        Apostille
                    </div>                    
                </div>

                <div className='servicio1'>
                    <div className="texto-servicio">
                        Pagos virtuales PSE.
                    </div>                    
                </div>

                <div className='servicio1'>
                    <div className="texto-servicio">
                        Anillados
                    </div>                    
                </div>
            </div>

            <div className='serviciogeneral'>
                
                <div className='servicio1'>
                    <div className="texto-servicio">
                        Laminación
                    </div>                    
                </div>

                <div className='servicio1'>
                    <div className="texto-servicio">
                        Soporte técnico para computadores.
                    </div>                    
                </div>

                <div className='servicio1'>
                    <div className="texto-servicio">
                        Instalación de redes e impresoras.
                    </div>                    
                </div>

                <div className='servicio1'>
                    <div className="texto-servicio">
                        Todo esto apoyado por la venta de refrescos y artículos de papelería.
                    </div>                    
                </div>
            </div>

            <footer>
                <div className='piepagina'>                
                    
                    <div className='pie'>                        
                        <h2><a className='imagen1' target="_blank" rel="noopener noreferrer" 
                        href="https://mundosolucionesnet.vercel.app/">MUNDO SOLUCIONES.NET</a></h2>
                        <div className='imagenlogo'>
                            <a href="https://mundosolucionesnet.vercel.app/" className="enlace"> <img src={logo} alt="logo" width={90} height={90} /> </a>
                        </div>
                    </div>

                    <div clas className='pie'>
                        <h3>Horario de atención:<br/>
                            Lunes de Viernes: 07:00am - 06:30pm<br/>
                            Sábados: 08:00am - 06:30am<br/>                         
                                                     
                            {/* Icono de WhatsApp con enlace */}
                            <a className='contacto' target="_blank" rel="noopener noreferrer" href="https://wa.me/+573124191663">
                                <FontAwesomeIcon icon={faWhatsapp} /> +57 312 419 1663
                            </a><br/>
                        </h3>    
                    </div>                          

                    <div className='pie'>  
                            {/* Icono de Correo con enlace */}
                            <h3><a className='correo' target="_blank" rel="noopener noreferrer" href="mailto:mundosolucionesnet@gmail.com">
                                <FontAwesomeIcon icon={faEnvelope} /> mundosolucionesnet@gmail.com
                            </a><br/>

                            {/* Icono de Ubicación */}
                            <FontAwesomeIcon icon={faLocation} /> Carrera 12 # 13-82 Centro<br/>
                            Florencia, Caquetá - Colombia <br/>

                            <a className='ubicacion' target="_blank" rel="noopener noreferrer" href="https://www.google.com/maps/place/Mundo+Comunicaciones.net/@4.7338903,-74.0316867,19z/data=!4m14!1m7!3m6!1s0x8e3f8f88156ba53d:0xf6e874ce92545800!2sParque+Altablanca!8m2!3d4.7342508!4d-74.0286737!16s%2Fg%2F1tq8klkx!3m5!1s0x8e3f8562916c0449:0xad997a02e5a7842f!8m2!3d4.733889!4d-74.031043!16s%2Fg%2F1yj2mft6l?hl=es&entry=ttu&g_ep=EgoyMDI0MTAyMS4xIKXMDSoASAFQAw%3D%3D">
                                <FontAwesomeIcon icon={faLocation} />  Ubicación
                            </a></h3>
                    </div>
                            
                    <div className='pie'>
                        <h3>Desarrollador: Jhon Tierradentro<br/>
                            <a className='contacto' target="_blank" rel="noopener noreferrer" href="https://wa.me/+573205119854">
                                <FontAwesomeIcon icon={faWhatsapp} />  +57 320 511 9854
                            </a><br/>

                            {/*<a className='correo' target="_blank" rel="noopener noreferrer" href="mailto:jhonhtr@gmail.com">jhonhtr@gmail.com </a><br/>*/}
                            <a className='correo' target="_blank" rel="noopener noreferrer" href="mailto:jhonhtr@gmail.com">
                                <FontAwesomeIcon icon={faEnvelope} /> jhonhtr@gmail.com
                            </a><br/>
                            Derechos Reservados- Copyright 2024
                        </h3>
                    </div>                    
                </div>
            </footer>
        </div>
    );
};

export default Servicios;
