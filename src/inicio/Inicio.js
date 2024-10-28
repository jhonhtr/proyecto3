import React, { useEffect } from 'react';
import { faHome, faBars, faLocation, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Inicio.css';
import fondo from './imagen/fondo.jpg';
import logo from './imagen/logo.png';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'; // Importa el icono de WhatsApp
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';  // Para el icono de correo




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
                </label>
                <a href="https://mundosolucionesarn.vercel.app/" className="enlace"> <img src={logo} alt="logo" width={70} height={70} /> </a>               

                <ul className="menu">  
                    <li><a href="/"><h1>MUNDO SOLUCIONES ARN</h1></a></li>              
                    <li><a href=""><h4>Inicio</h4></a></li>
                    <li><a href="/Servicios"><h4>Servicios</h4></a></li>
                    <li><a href="/Contacto"><h4>Contacto</h4></a></li>  
                </ul>
            </nav>


            <div className='inicio'>
                
                <div className='inicio1'>
                    <div className="texto-inicio">
                        <h1><a className='imagen1' target="_blank" rel="noopener noreferrer" 
                        href="https://mundosolucionesarn.vercel.app/">Mundo Soluciones ARN</a></h1>
                    </div>                    
                </div>
                
            </div>

            <div className='inicio2'>
                
                <div className='inicio33'>
                    <div className="texto-inicio">
                    <a className='imagen1' target="_blank" rel="noopener noreferrer" 
                    href=""><h4>🌟¡Bienvenido a Mundo Soluciones ARN!<br/><br/></h4>
                    Tu aliado en el mundo de la documentación y tecnología. <br/>
                    Ofrecemos un servicio integral para que tu trabajo sea más fácil y eficiente.</a>
                    </div>                    
                </div>

                <div className='inicio33'>
                    <div className="texto-inicio">
                        <a className='imagen1' target="_blank" rel="noopener noreferrer" 
                        href=""><h4>🖨️Servicios a tu medida:<br/><br/></h4>
                        Desde asesoría en documentación ante entidades públicas y privadas, <br/>
                        hasta la instalación de redes e impresoras. ¡Nos encargamos de todo!</a>
                    </div>                    
                </div>

                <div className='inicio33'>
                    <div className="texto-inicio">
                        <a className='imagen1' target="_blank" rel="noopener noreferrer" 
                        href=""><h4>💻Soporte técnico confiable:<br/><br/></h4>
                        Olvídate de los problemas informáticos. <br/>
                        Nuestro equipo de expertos está listo para brindarte soporte <br/>
                        técnico para computadores y garantizar que todo funcione a la perfección.</a>
                    </div>                    
                </div>
            </div>

            <div className='inicio2'>
                <div className='inicio33'>
                    <div className="texto-inicio">
                        <a className='imagen1' target="_blank" rel="noopener noreferrer" 
                        href=""><h4>📜 Certificaciones y más:<br/><br/></h4>
                        Te ayudamos a obtener todas las certificaciones necesarias <br/>
                        para que tu negocio esté siempre en regla. ¡Estamos aquí para ayudarte a crecer!</a>
                    </div>                    
                </div>

		        <div className='inicio33'>
                    <div className="texto-inicio">
                        <a className='imagen1' target="_blank" rel="noopener noreferrer" 
                        href=""><h4>✨ Todo lo que necesitas en un solo lugar:<br/><br/></h4>
                        En Mundo Soluciones ARN, no solo vendemos productos, <br/>
                        ofrecemos soluciones. <br/>
                        Descubre cómo podemos facilitar tu día a día.</a>
                    </div>                    
                </div>

		        <div className='inicio33'>
                    <div className="texto-inicio">
                    <a className='imagen1' target="_blank" rel="noopener noreferrer" 
                        href=""><h4>📞 Contáctanos hoy mismo!<br/><br/></h4>
                        Llama al +57 312 419 1663 y comienza a disfrutar de nuestros servicios.</a>
                    </div>                    
                </div>

            </div>            



            <footer>
                <div className='piepagina'>                
                    
                    <div className='pieinicio'>
                        <div className='pietitulo'>
                            <h2><a className='imagen1' target="_blank" rel="noopener noreferrer" 
                            href="https://mundosolucionesarn.vercel.app/">MUNDO SOLUCIONES ARN</a></h2>
                        </div>
                        <div className='imagenlogo'>
                            <a href="https://mundosolucionesarn.vercel.app/" className="enlace"> <img src={logo} alt="logo" width={90} height={90} /> </a>
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

                            <a className='ubicacion' target="_blank" rel="noopener noreferrer" href="https://www.google.com/maps/place/MUNDO+SOLUCIONES+NET/@1.614265,-75.613419,15z/data=!4m6!3m5!1s0x8e244f12424fc1a9:0xd67469021b7bc8a9!8m2!3d1.6142647!4d-75.6134194!16s%2Fg%2F11s99h9xzs?hl=es-ES&entry=ttu&g_ep=EgoyMDI0MTAyMy4wIKXMDSoASAFQAw%3D%3D">
                                <FontAwesomeIcon icon={faLocation} />  Ubicación
                            </a></h3>
                    </div>
                            
                    <div className='pie'>
                        {/*<h3>Desarrollador: Jhon Tierradentro<br/>
                            <a className='contacto' target="_blank" rel="noopener noreferrer" href="https://wa.me/+573205119854">
                                <FontAwesomeIcon icon={faWhatsapp} />  +57 320 511 9854
                            </a><br/>>*/}

                            {/*<a className='correo' target="_blank" rel="noopener noreferrer" href="mailto:jhonhtr@gmail.com">jhonhtr@gmail.com </a><br/>*/}
                            {/*<a className='correo' target="_blank" rel="noopener noreferrer" href="mailto:jhonhtr@gmail.com">
                                <FontAwesomeIcon icon={faEnvelope} /> jhonhtr@gmail.com
                            </a><br/>*/}
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

export default Inicio; 
