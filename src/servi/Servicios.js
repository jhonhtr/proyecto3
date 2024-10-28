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
                    <li><a href="/"><h1>MUNDO SOLUCIONES ARN</h1></a></li>              
                    <li><a href="/"><h4>Inicio</h4></a></li>
                    <li><a href=""><h4>Servicios</h4></a></li>
                    <li><a href="/Contacto"><h4>Contacto</h4></a></li>  
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
                    <div className="boton">
                        <a className='boton1' target="_blank" rel="noopener noreferrer" 
                        href={`https://wa.me/573124191663?text=Buen%20día,%20solicito%20un%20servicio%20de:%20Fotocopias%20a%20blanco%20y%20negro%20y%20color.`}>
                        Solicitar Información</a>
                    </div>               
                </div>

                <div className='servicio1'>
                    <div className="texto-servicio">
                        Elaboración y envío de diversos documentos tanto personales como de trabajo.
                    </div>
                    <div className="boton">
                        <a className='boton1' target="_blank" rel="noopener noreferrer" 
                        href={`https://wa.me/573124191663?text=Buen%20día,%20solicito%20un%20servicio%20de:%20Elaboración%20y%20envío%20de%20diversos%20documentos%20tanto%20personales%20como%20de%20trabajo.`}>
                        Solicitar Información</a>
                    </div>
                </div>

                <div className='servicio1'>
                    <div className="texto-servicio">
                        Asesorías en documentación ante entidades públicas y privadas.
                    </div>  
                    <div className="boton">
                        <a className='boton1' target="_blank" rel="noopener noreferrer" 
                        href={`https://wa.me/573124191663?text=Buen%20día,%20solicito%20un%20servicio%20de:%20Asesorías%20en%20documentación%20ante%20entidades%20públicas%20y%20privadas.`}>
                        Solicitar Información</a>
                    </div>                  
                </div>

                <div className='servicio1'>
                    <div className="texto-servicio">
                        Digitalización de textos, oficios, poderes, autorizaciones, derechos de petición, trámites virtuales, compraventas, testamentos.
                    </div>  
                    <div className="boton">
                        <a className='boton1' target="_blank" rel="noopener noreferrer" 
                        href={`https://wa.me/573124191663?text=Buen%20día,%20solicito%20un%20servicio%20de:%20Digitalización%20de%20textos,%20oficios,%20poderes,%20autorizaciones,%20derechos%20de%20petición,%20trámites%20virtuales,%20compraventas,%20testamentos.`}>
                        Solicitar Información</a>
                    </div>                  
                </div>

            </div>

            <div className='serviciogeneral'>
                
                <div className='servicio1'>
                    <div className="texto-servicio">
                        Impresión tanto láser como de inyección de tinta.
                    </div> 
                    <div className="boton">
                        <a className='boton1' target="_blank" rel="noopener noreferrer" 
                        href={`https://wa.me/573124191663?text=Buen%20día,%20solicito%20un%20servicio%20de:%20Impresión%20tanto%20láser%20como%20de%20inyección%20de%20tinta.`}>
                        Solicitar Información</a>
                    </div>                   
                </div>

                <div className='servicio1'>
                    <div className="texto-servicio">
                        Búsqueda de trabajo y envío de Hoja de Vida.
                    </div> 
                    <div className="boton">
                        <a className='boton1' target="_blank" rel="noopener noreferrer" 
                        href={`https://wa.me/573124191663?text=Buen%20día,%20solicito%20un%20servicio%20de:%20Búsqueda%20de%20trabajo%20y%20envío%20de%20Hoja%20de%20Vida.`}>
                        Solicitar Información</a>
                    </div>                   
                </div>

                <div className='servicio1'>
                    <div className="texto-servicio">
                        Respaldo de archivos en CD, rotulación en CDs.
                    </div>   
                    <div className="boton">
                        <a className='boton1' target="_blank" rel="noopener noreferrer" 
                        href={`https://wa.me/573124191663?text=Buen%20día,%20solicito%20un%20servicio%20de:%20Respaldo%20de%20archivos%20en%20CD,%20rotulación%20en%20CDs.`}>
                        Solicitar Información</a>
                    </div>                 
                </div>

                <div className='servicio1'>
                    <div className="texto-servicio">
                    Uso y capacitación técnica de las aplicaciones más comunes del mercado.
                    </div>   
                    <div className="boton">
                        <a className='boton1' target="_blank" rel="noopener noreferrer" 
                        href={`https://wa.me/573124191663?text=Buen%20día,%20solicito%20un%20servicio%20de:%20Uso%20y%20capacitación%20técnica%20de%20las%20aplicaciones%20más%20comunes%20del%20mercado.`}>
                        Solicitar Información</a>
                    </div>                 
                </div>
            </div>

            <div className='serviciogeneral'>
                
                <div className='servicio1'>
                    <div className="texto-servicio">
                        Expedición de certificados de libertad y tradición.
                    </div>  
                    <div className="boton">
                        <a className='boton1' target="_blank" rel="noopener noreferrer" 
                        href={`https://wa.me/573124191663?text=Buen%20día,%20solicito%20un%20servicio%20de:%20Expedición%20de%20certificados%20de%20libertad%20y%20tradición.`}>
                        Solicitar Información</a>
                    </div>                  
                </div>

                <div className='servicio1'>
                    <div className="texto-servicio">
                        Apostille
                    </div>    
                    <div className="boton">
                        <a className='boton1' target="_blank" rel="noopener noreferrer" 
                        href={`https://wa.me/573124191663?text=Buen%20día,%20solicito%20un%20servicio%20de:%20Apostille.`}>
                        Solicitar Información</a>
                    </div>                
                </div>

                <div className='servicio1'>
                    <div className="texto-servicio">
                        Pagos virtuales PSE.
                    </div>   
                    <div className="boton">
                        <a className='boton1' target="_blank" rel="noopener noreferrer" 
                        href={`https://wa.me/573124191663?text=Buen%20día,%20solicito%20un%20servicio%20de:%20Pagos%20virtuales%20PSE.`}>
                        Solicitar Información</a>
                    </div>                 
                </div>

                <div className='servicio1'>
                    <div className="texto-servicio">
                        Anillados
                    </div>    
                    <div className="boton">
                        <a className='boton1' target="_blank" rel="noopener noreferrer" 
                        href={`https://wa.me/573124191663?text=Buen%20día,%20solicito%20un%20servicio%20de:%20Anillados.`}>
                        Solicitar Información</a>
                    </div>                
                </div>
            </div>

            <div className='serviciogeneral'>
                
                <div className='servicio1'>
                    <div className="texto-servicio">
                        Laminación
                    </div>   
                    <div className="boton">
                        <a className='boton1' target="_blank" rel="noopener noreferrer" 
                        href={`https://wa.me/573124191663?text=Buen%20día,%20solicito%20un%20servicio%20de:%20Laminación.`}>
                        Solicitar Información</a>
                    </div>                 
                </div>

                <div className='servicio1'>
                    <div className="texto-servicio">
                        Soporte técnico para computadores.
                    </div> 
                    <div className="boton">
                        <a className='boton1' target="_blank" rel="noopener noreferrer" 
                        href={`https://wa.me/573124191663?text=Buen%20día,%20solicito%20un%20servicio%20de:%20Soporte%20técnico%20para%20computadores.`}>
                        Solicitar Información</a>
                    </div>                   
                </div>

                <div className='servicio1'>
                    <div className="texto-servicio">
                        Instalación de redes e impresoras.
                    </div> 
                    <div className="boton">
                        <a className='boton1' target="_blank" rel="noopener noreferrer" 
                        href={`https://wa.me/573124191663?text=Buen%20día,%20solicito%20un%20servicio%20de:%20Instalación%20de%20redes%20e%20impresoras.`}>
                        Solicitar Información</a>
                    </div>                   
                </div>

                <div className='servicio1'>
                    <div className="texto-servicio">
                        Todo esto apoyado por la venta de refrescos y artículos de papelería.
                    </div>  
                    <div className="boton">
                        <a className='boton1' target="_blank" rel="noopener noreferrer" 
                        href={`https://wa.me/573124191663?text=Buen%20día,%20solicito%20un%20domicilio%20de:%20Refrescos%20y%20artículos%20de%20papelería.`}>
                        Solicitar Información</a>
                    </div>                  
                </div>
            </div>

            <footer>
                <div className='piepagina'>                
                    
                    <div className='pieinicio'>
                        <div className='pietitulo'>
                            <h2><a className='imagen1' target="_blank" rel="noopener noreferrer" 
                            href="https://mundosolucionesnet.vercel.app/">MUNDO SOLUCIONES ARN</a></h2>
                        </div>
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
                        {/*<h3>Desarrollador: Jhon Tierradentro<br/>*/}
                            {/*<a className='contacto' target="_blank" rel="noopener noreferrer" href="https://wa.me/+573205119854">
                                <FontAwesomeIcon icon={faWhatsapp} />  +57 320 511 9854
                            </a><br/>*/}

                            {/*<a className='correo' target="_blank" rel="noopener noreferrer" href="mailto:jhonhtr@gmail.com">jhonhtr@gmail.com </a><br/>*/}
                            {/*<a className='correo' target="_blank" rel="noopener noreferrer" href="mailto:jhonhtr@gmail.com">*/}
                                {/*<FontAwesomeIcon icon={faEnvelope} /> jhonhtr@gmail.com
                            </a><br/></h3> */}
                        <h3>
                            Derechos Reservados- Copyright 2024<br/>
                            ©
                        </h3>
                    </div>                    
                </div>
            </footer>
        </div>
    );
};

export default Servicios;
