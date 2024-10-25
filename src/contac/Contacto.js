import React, { useEffect } from 'react';
import { faHome, faBars, faLocation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'; // Importa el icono de WhatsApp
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';  // Para el icono de correo
import './contacto.css';
import fondo from './imagen/fondo.jpg';
import logo from './imagen/logo.png';
import uno from './imagen/uno.jpg';
import dos from './imagen/dos.jpg';
import tres from './imagen/tres.jpg';
import pago from './imagen/pago.jpg';

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
                <a href="https://mundosolucionesnet.vercel.app/" className="enlace"> <img src={logo} alt="cama1" width={70} height={70} /> </a>             
                <ul className="menu">  
                    <li><a href="/"><h1>MUNDO SOLUCIONES ARN</h1></a></li>              
                    <li><a href="/"><h4>Inicio</h4></a></li>
                    <li><a href="/Servicios"><h4>Servicios</h4></a></li>
                    <li><a href=""><h4>Contacto</h4></a></li>  
                </ul>
            </nav>

            <div className='inicio1'>
                    <div className="texto-inicio">
                        <h1><a className='imagen1' target="_blank" rel="noopener noreferrer" 
                        href="https://mundosolucionesnet.vercel.app/">Mundo Soluciones ARN / Contacto</a></h1>
                    </div>                    
            </div>

            <div className='divcontacto'>
                
                <div className='contacto1'>
                    <div className="contactitulo">
                        <h1>Contactenos</h1><br/>
                    </div>
                    <div className='contacto1'>
                        <a className='contact' target="_blank" rel="noopener noreferrer" href="https://wa.me/+573172396056">
                                <FontAwesomeIcon icon={faWhatsapp} /> +57 317 239 6056
                        </a>
                    </div>
                    <div className='contacto1'>
                        <a className='contact' target="_blank" rel="noopener noreferrer" href="https://wa.me/+573143954997">
                                <FontAwesomeIcon icon={faWhatsapp} /> +57 314 395 4997
                        </a>
                    </div>
                    <div className='contacto1'>
                        <a className='contact' target="_blank" rel="noopener noreferrer" href="https://wa.me/+573232094820">
                                <FontAwesomeIcon icon={faWhatsapp} /> +57 323 209 4820
                        </a>
                    </div> 
                    <div className='contacto1'>
                        <a className='contact'> PARA PAGOS<br/>
                        MUNDO SOLUCIONES ARN<br/>
                        Código de comercio: 935706498 </a>
                    </div>
                </div>

                <div className='pago'>                    
                    <img src={pago} alt="pago" width={300} height={500}/>
                </div>

                <div className='contactoimagen'>
                    <div className="imagen1">
                        <a className='img1' target="_blank" rel="noopener noreferrer" 
                        href="https://www.google.com/maps/place/Mundo+Comunicaciones.net/@4.7338903,-74.0316867,19z/data=!4m14!1m7!3m6!1s0x8e3f8f88156ba53d:0xf6e874ce92545800!2sParque+Altablanca!8m2!3d4.7342508!4d-74.0286737!16s%2Fg%2F1tq8klkx!3m5!1s0x8e3f8562916c0449:0xad997a02e5a7842f!8m2!3d4.733889!4d-74.031043!16s%2Fg%2F1yj2mft6l?hl=es&entry=ttu&g_ep=EgoyMDI0MTAyMS4xIKXMDSoASAFQAw%3D%3D">
                        <img src={uno} alt="uno" width={200} height={100}/></a>
                    </div>

                    <div className="imagen1">
                        <a className='img1' target="_blank" rel="noopener noreferrer" 
                        href="https://www.google.com/maps/place/Mundo+Comunicaciones.net/@4.7338903,-74.0316867,19z/data=!4m14!1m7!3m6!1s0x8e3f8f88156ba53d:0xf6e874ce92545800!2sParque+Altablanca!8m2!3d4.7342508!4d-74.0286737!16s%2Fg%2F1tq8klkx!3m5!1s0x8e3f8562916c0449:0xad997a02e5a7842f!8m2!3d4.733889!4d-74.031043!16s%2Fg%2F1yj2mft6l?hl=es&entry=ttu&g_ep=EgoyMDI0MTAyMS4xIKXMDSoASAFQAw%3D%3D">
                        <img src={dos} alt="dos" width={200} height={100}/></a><br/>
                    </div>
                </div>
                
                <div className='contactoimagen1'>
                    <div className="imagenlogo">
                        <a className='img1' target="_blank" rel="noopener noreferrer" 
                        href="https://www.google.com/maps/place/Mundo+Comunicaciones.net/@4.7338903,-74.0316867,19z/data=!4m14!1m7!3m6!1s0x8e3f8f88156ba53d:0xf6e874ce92545800!2sParque+Altablanca!8m2!3d4.7342508!4d-74.0286737!16s%2Fg%2F1tq8klkx!3m5!1s0x8e3f8562916c0449:0xad997a02e5a7842f!8m2!3d4.733889!4d-74.031043!16s%2Fg%2F1yj2mft6l?hl=es&entry=ttu&g_ep=EgoyMDI0MTAyMS4xIKXMDSoASAFQAw%3D%3D">
                        <img src={tres} alt="tres" width={300} height={140}/></a>
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
                        <h3>Desarrollador: Jhon Tierradentro<br/>
                            <a className='contacto' target="_blank" rel="noopener noreferrer" href="https://wa.me/+573205119854">
                                <FontAwesomeIcon icon={faWhatsapp} />  +57 320 511 9854
                            </a><br/>

                            {/*<a className='correo' target="_blank" rel="noopener noreferrer" href="mailto:jhonhtr@gmail.com">jhonhtr@gmail.com </a><br/>*/}
                            {/*<a className='correo' target="_blank" rel="noopener noreferrer" href="mailto:jhonhtr@gmail.com">*/}
                                {/*<FontAwesomeIcon icon={faEnvelope} /> jhonhtr@gmail.com
                            </a><br/>*/}
                            Derechos Reservados- Copyright 2024
                        </h3>
                    </div>                    
                </div>
            </footer>
        </div>
    );
};

export default Contacto;
