import React, { useEffect } from 'react';
import { faHome, faBars, faLocation, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Inicio.css';
import fondo from './imagen/fondo.jpg';
import logo from './imagen/logo.png';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'; // Importa el icono de WhatsApp
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';  // Para el icono de correo
import uno from './imagen/uno.jpg';
import dos from './imagen/dos.jpg';
import tres from './imagen/tres.jpg';
import cuatro from './imagen/cuatro.jpg';
import cinco from './imagen/cinco.jpg';
import seis from './imagen/seis.jpg';
import siete from './imagen/siete.jpg';
import ocho from './imagen/ocho.jpg';
import nueve from './imagen/nueve.jpg';
import diez from './imagen/diez.jpg';
import once from './imagen/once.jpg';
import doce from './imagen/doce.jpg';
import trece from './imagen/trece.jpg';
import catorce from './imagen/catorce.jpg';
import quince from './imagen/quince.jpg';
import dieciseis from './imagen/dieciseis.jpg';
import diecisiete from './imagen/diecisiete.jpg';
import dieciocho from './imagen/dieciocho.jpg';
import diecinueve from './imagen/diecinueve.jpg';
import veinte from './imagen/veinte.jpg';
import veintiuno from './imagen/veintiuno.jpg';
import veintidos from './imagen/veintidos.jpg';
import veintitres from './imagen/veintitres.jpg';
import veinticuatro from './imagen/veinticuatro.jpg';

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
                <a href="https://mundosolucionesnet.vercel.app/" className="enlace"> <img src={logo} alt="cama1" width={70} height={70} /> </a>               

                <ul className="menu">                
                    <li><a href="">Inicio</a></li>
                    <li><a href="/Servicios">Servicios</a></li>
                    <li><a href="/Contacto">Contacto</a></li>  
                </ul>
            </nav>


            <div className='inicio'>
                
                <div className='inicio1'>
                    <div className="texto-inicio">
                        <h1><a className='imagen1' target="_blank" rel="noopener noreferrer" 
                        href="https://mundosolucionesnet.vercel.app/">Mundo Soluciones.Net</a></h1>
                    </div>                    
                </div>
                
            </div>

            <div className='inicio2'>
                
                <div className='inicio3'>
                    <div className="texto-inicio">
                    <a className='imagen1' target="_blank" rel="noopener noreferrer" 
                    href="https://google.com"><img src={uno} alt="uno" width={120} height={60}/></a>
                    </div>                    
                </div>

                <div className='inicio3'>
                    <div className="texto-inicio">
                        <a className='imagen1' target="_blank" rel="noopener noreferrer" 
                        href="https://facebook.com"><img src={dos} alt="dos" width={120} height={60}/></a>
                    </div>                    
                </div>

                <div className='inicio3'>
                    <div className="texto-inicio">
                        <a className='imagen1' target="_blank" rel="noopener noreferrer" 
                        href="https://youtube.com"><img src={tres} alt="tres" width={120} height={60}/></a>
                    </div>                    
                </div>

                <div className='inicio3'>
                    <div className="texto-inicio">
                        <a className='imagen1' target="_blank" rel="noopener noreferrer" 
                        href="https://web.whatsapp.com/"><img src={cuatro} alt="cuatro" width={120} height={60}/></a>
                    </div>                    
                </div>

		        <div className='inicio3'>
                    <div className="texto-inicio">
                        <a className='imagen1' target="_blank" rel="noopener noreferrer" 
                        href="https://gmail.com/"><img src={cinco} alt="cinco" width={120} height={60}/></a>
                    </div>                    
                </div>

		        <div className='inicio3'>
                    <div className="texto-inicio">
                    <a className='imagen1' target="_blank" rel="noopener noreferrer" 
                        href="https://www.hotmail.com/"><img src={seis} alt="seis" width={120} height={60}/></a>
                    </div>                    
                </div>

            </div>            

            <div className='inicio2'>
                
                <div className='inicio3'>
                    <div className="texto-inicio">
                    <a className='imagen1' target="_blank" rel="noopener noreferrer" 
                    href="https://www.funcionpublica.gov.co/"><img src={siete} alt="siete" width={120} height={60}/></a>
                    </div>                    
                </div>

                <div className='inicio3'>
                    <div className="texto-inicio">
                        <a className='imagen1' target="_blank" rel="noopener noreferrer" 
                        href="https://sistemamaestro.mineducacion.gov.co/"><img src={ocho} alt="ocho" width={120} height={60}/></a>
                    </div>                    
                </div>

                <div className='inicio3'>
                    <div className="texto-inicio">
                        <a className='imagen1' target="_blank" rel="noopener noreferrer" 
                        href="https://simo.cnsc.gov.co/"><img src={nueve} alt="nueve" width={120} height={60}/></a>
                    </div>                    
                </div>

                <div className='inicio3'>
                    <div className="texto-inicio">
                        <a className='imagen1' target="_blank" rel="noopener noreferrer" 
                        href="https://community.secop.gov.co/"><img src={diez} alt="diez" width={120} height={60}/></a>
                    </div>                    
                </div>

		        <div className='inicio3'>
                    <div className="texto-inicio">
                        <a className='imagen1' target="_blank" rel="noopener noreferrer" 
                        href="https://www.dian.gov.co/"><img src={once} alt="once" width={120} height={60}/></a>
                    </div>                    
                </div>

		        <div className='inicio3'>
                    <div className="texto-inicio">
                    <a className='imagen1' target="_blank" rel="noopener noreferrer" 
                        href="https://www.dian.gov.co/"><img src={doce} alt="doce" width={120} height={60}/></a>
                    </div>                    
                </div>

            </div>            

            <div className='inicio2'>
                
                <div className='inicio3'>
                    <div className="texto-inicio">
                    <a className='imagen1' target="_blank" rel="noopener noreferrer" 
                    href="https://www.procuraduria.gov.co/"><img src={trece} alt="trece" width={120} height={60}/></a>
                    </div>                    
                </div>

                <div className='inicio3'>
                    <div className="texto-inicio">
                        <a className='imagen1' target="_blank" rel="noopener noreferrer" 
                        href="https://www.contraloria.gov.co/"><img src={catorce} alt="catorce" width={120} height={60}/></a>
                    </div>                    
                </div>

                <div className='inicio3'>
                    <div className="texto-inicio">
                        <a className='imagen1' target="_blank" rel="noopener noreferrer" 
                        href="https://antecedentes.policia.gov.co:7005/"><img src={quince} alt="quince" width={120} height={60}/></a>
                    </div>                    
                </div>

                <div className='inicio3'>
                    <div className="texto-inicio">
                        <a className='imagen1' target="_blank" rel="noopener noreferrer" 
                        href="https://srvcnpc.policia.gov.co/"><img src={dieciseis} alt="dieciseis" width={120} height={60}/></a>
                    </div>                    
                </div>

		        <div className='inicio3'>
                    <div className="texto-inicio">
                        <a className='imagen1' target="_blank" rel="noopener noreferrer" 
                        href="https://inhabilidades.policia.gov.co:8080/"><img src={diecisiete} alt="diecisiete" width={120} height={60}/></a>
                    </div>                    
                </div>

		        <div className='inicio3'>
                    <div className="texto-inicio">
                    <a className='imagen1' target="_blank" rel="noopener noreferrer" 
                        href="https://adenunciar.policia.gov.co/"><img src={dieciocho} alt="dieciocho" width={120} height={60}/></a>
                    </div>                    
                </div>

            </div>
            
            <div className='inicio2'>
                
                <div className='inicio3'>
                    <div className="texto-inicio">
                    <a className='imagen1' target="_blank" rel="noopener noreferrer" 
                    href="https://www.runt.gov.co/"><img src={diecinueve} alt="diecinueve" width={120} height={60}/></a>
                    </div>                    
                </div>

                <div className='inicio3'>
                    <div className="texto-inicio">
                        <a className='imagen1' target="_blank" rel="noopener noreferrer" 
                        href="https://edeskprisma.syc.com.co/CAQUETA"><img src={veinte} alt="veinte" width={120} height={60}/></a>
                    </div>                    
                </div>

                <div className='inicio3'>
                    <div className="texto-inicio">
                        <a className='imagen1' target="_blank" rel="noopener noreferrer" 
                        href="https://www.huila.gov.co/"><img src={veintiuno} alt="veintiuno" width={120} height={60}/></a>
                    </div>                    
                </div>

                <div className='inicio3'>
                    <div className="texto-inicio">
                        <a className='imagen1' target="_blank" rel="noopener noreferrer" 
                        href="https://nuevaoficinavirtual.shd.gov.co/bogota/es/descargaFacturaVA"><img src={veintidos} alt="veintidos" width={120} height={60}/></a>
                    </div>                    
                </div>

		        <div className='inicio3'>
                    <div className="texto-inicio">
                        <a className='imagen1' target="_blank" rel="noopener noreferrer" 
                        href="https://aplicativosenlinea.net/sivervtolima/redirect/"><img src={veintitres} alt="veintitres" width={120} height={60}/></a>
                    </div>                    
                </div>

		        <div className='inicio3'>
                    <div className="texto-inicio">
                    <a className='imagen1' target="_blank" rel="noopener noreferrer" 
                        href="https://www.fcm.org.co/"><img src={veinticuatro} alt="veinticuatro" width={120} height={60}/></a>
                    </div>                    
                </div>

            </div>
            

            <footer>
                <div>                
                    <div className='pie'>
                        <h2><a className='imagen1' target="_blank" rel="noopener noreferrer" 
                        href="https://mundosolucionesnet.vercel.app/">MUNDO SOLUCIONES.NET</a></h2><br/>
                        <h3>Horario de atención:<br/>
                            Lunes de Viernes: 07:00am - 06:30pm<br/>
                            Sábados: 08:00am - 06:30am<br/>                         
                                                     
                            {/* Icono de WhatsApp con enlace */}
                            <a className='contacto' target="_blank" rel="noopener noreferrer" href="https://wa.me/+573124191663">
                                <FontAwesomeIcon icon={faWhatsapp} /> +57 312 419 1663
                            </a><br/>                           
                            
                            {/* Icono de Correo con enlace */}
                            <a className='correo' target="_blank" rel="noopener noreferrer" href="mailto:mundosolucionesnet@gmail.com">
                                <FontAwesomeIcon icon={faEnvelope} /> mundosolucionesnet@gmail.com
                            </a><br/>

                            {/* Icono de Ubicación */}
                            <FontAwesomeIcon icon={faLocation} /> Carrera 12 # 13-82 Centro<br/>
                            Florencia, Caquetá - Colombia <br/>

                            <a className='ubicacion' target="_blank" rel="noopener noreferrer" href="https://www.google.com/maps/place/Mundo+Comunicaciones.net/@4.7338903,-74.0316867,19z/data=!4m14!1m7!3m6!1s0x8e3f8f88156ba53d:0xf6e874ce92545800!2sParque+Altablanca!8m2!3d4.7342508!4d-74.0286737!16s%2Fg%2F1tq8klkx!3m5!1s0x8e3f8562916c0449:0xad997a02e5a7842f!8m2!3d4.733889!4d-74.031043!16s%2Fg%2F1yj2mft6l?hl=es&entry=ttu&g_ep=EgoyMDI0MTAyMS4xIKXMDSoASAFQAw%3D%3D">
                                <FontAwesomeIcon icon={faLocation} />  Ubicación
                            </a><br/><br/>
                            
                            Desarrollador: Jhon Tierradentro/
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

export default Inicio; 
