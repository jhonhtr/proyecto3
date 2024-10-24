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
import veinticinco from './imagen/veinticinco.jpg';
import veintiseis from './imagen/veintiseis.jpg';
import veintisiete from './imagen/veintisiete.jpg';
import veintiocho from './imagen/veintiocho.jpg';
import veintinueve from './imagen/veintinueve.jpg';
import treinta from './imagen/treinta.jpg';
import treintaiuno from './imagen/treintaiuno.jpg';
import treintaidos from './imagen/treintaidos.jpg';
import treintaitres from './imagen/treintaitres.jpg';
import treintaicuatro from './imagen/treintaicuatro.jpg';
import treintaicinco from './imagen/treintaicinco.jpg';
import treintaiseis from './imagen/treintaiseis.jpg';
import treintaisiete from './imagen/treintaisiete.jpg';
import treintaiocho from './imagen/treintaiocho.jpg';
import treintainueve from './imagen/treintainueve.jpg';
import cuarenta from './imagen/cuarenta.jpg';
import cuarentaiuno from './imagen/cuarentaiuno.jpg';
import cuarentaidos from './imagen/cuarentaidos.jpg';
import cuarentaitres from './imagen/cuarentaitres.jpg';
import cuarentaicuatro from './imagen/cuarentaicuatro.jpg';
import cuarentaicinco from './imagen/cuarentaicinco.jpg';
import cuarentaiseis from './imagen/cuarentaiseis.jpg';
import cuarentaisiete from './imagen/cuarentaisiete.jpg';
import cuarentaiocho from './imagen/cuarentaiocho.jpg';
import cuarentainueve from './imagen/cuarentainueve.jpg';
import cincuenta from './imagen/cincuenta.jpg';
import cincuentaiuno from './imagen/cincuentaiuno.jpg';
import cincuentaidos from './imagen/cincuentaidos.jpg';
import cincuentaitres from './imagen/cincuentaitres.jpg';
import cincuentaicuatro from './imagen/cincuentaicuatro.jpg';
import cincuentaicinco from './imagen/cincuentaicinco.jpg';
import cincuentaiseis from './imagen/cincuentaiseis.jpg';
import cincuentaisiete from './imagen/cincuentaisiete.jpg';
import cincuentaiocho from './imagen/cincuentaiocho.jpg';
import cincuentainueve from './imagen/cincuentainueve.jpg';
import sesenta from './imagen/sesenta.jpg';
import sesentaiuno from './imagen/sesentaiuno.jpg';
import sesentaidos from './imagen/sesentaidos.jpg';
import sesentaitres from './imagen/sesentaitres.jpg';
import sesentaicuatro from './imagen/sesentaicuatro.jpg';
import sesentaicinco from './imagen/sesentaicinco.jpg';
import sesentaiseis from './imagen/sesentaiseis.jpg';
import sesentaisiete from './imagen/sesentaisiete.jpg';
import sesentaiocho from './imagen/sesentaiocho.jpg';
import sesentainueve from './imagen/sesentainueve.jpg';
import setenta from './imagen/setenta.jpg';
import setentaiuno from './imagen/setentaiuno.jpg';
import setentaidos from './imagen/setentaidos.jpg';
import setentaitres from './imagen/setentaitres.jpg';
import setentaicuatro from './imagen/setentaicuatro.jpg';
import setentaicinco from './imagen/setentaicinco.jpg';
import setentaiseis from './imagen/setentaiseis.jpg';
import setentaisiete from './imagen/setentaisiete.jpg';
import setentaiocho from './imagen/setentaiocho.jpg';
import setentainueve from './imagen/setentainueve.jpg';
import ochenta from './imagen/ochenta.jpg';
import ochentaiuno from './imagen/ochentaiuno.jpg';
import ochentaidos from './imagen/ochentaidos.jpg';
import ochentaitres from './imagen/ochentaitres.jpg';
import ochentaicuatro from './imagen/ochentaicuatro.jpg';

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

<div className='inicio2'>
                
                <div className='inicio3'>
                    <div className="texto-inicio">
                    <a className='imagen1' target="_blank" rel="noopener noreferrer" 
                    href="#"><img src={veinticinco} alt="veinticinco" width={120} height={60}/></a>
                    </div>                    
                </div>

                <div className='inicio3'>
                    <div className="texto-inicio">
                        <a className='imagen1' target="_blank" rel="noopener noreferrer" 
                        href="#"><img src={veintiseis} alt="veintiseis" width={120} height={60}/></a>
                    </div>                    
                </div>

                <div className='inicio3'>
                    <div className="texto-inicio">
                        <a className='imagen1' target="_blank" rel="noopener noreferrer" 
                        href="#"><img src={veintisiete} alt="veintisiete" width={120} height={60}/></a>
                    </div>                    
                </div>

                <div className='inicio3'>
                    <div className="texto-inicio">
                        <a className='imagen1' target="_blank" rel="noopener noreferrer" 
                        href="#"><img src={veintiocho} alt="veintiocho" width={120} height={60}/></a>
                    </div>                    
                </div>

		        <div className='inicio3'>
                    <div className="texto-inicio">
                        <a className='imagen1' target="_blank" rel="noopener noreferrer" 
                        href="#"><img src={veintinueve} alt="veintinueve" width={120} height={60}/></a>
                    </div>                    
                </div>

		        <div className='inicio3'>
                    <div className="texto-inicio">
                    <a className='imagen1' target="_blank" rel="noopener noreferrer" 
                        href="#"><img src={treinta} alt="treinta" width={120} height={60}/></a>
                    </div>                    
                </div>

            </div>

            <div className='inicio2'>
                
                <div className='inicio3'>
                    <div className="texto-inicio">
                    <a className='imagen1' target="_blank" rel="noopener noreferrer" 
                    href="#"><img src={treintaiuno} alt="treintaiuno" width={120} height={60}/></a>
                    </div>                    
                </div>

                <div className='inicio3'>
                    <div className="texto-inicio">
                        <a className='imagen1' target="_blank" rel="noopener noreferrer" 
                        href="#"><img src={treintaidos} alt="treintaidos" width={120} height={60}/></a>
                    </div>                    
                </div>

                <div className='inicio3'>
                    <div className="texto-inicio">
                        <a className='imagen1' target="_blank" rel="noopener noreferrer" 
                        href="#"><img src={treintaitres} alt="treintaitres" width={120} height={60}/></a>
                    </div>                    
                </div>

                <div className='inicio3'>
                    <div className="texto-inicio">
                        <a className='imagen1' target="_blank" rel="noopener noreferrer" 
                        href="#"><img src={treintaicuatro} alt="treintaicuatro" width={120} height={60}/></a>
                    </div>                    
                </div>

		        <div className='inicio3'>
                    <div className="texto-inicio">
                        <a className='imagen1' target="_blank" rel="noopener noreferrer" 
                        href="#"><img src={treintaicinco} alt="treintaicinco" width={120} height={60}/></a>
                    </div>                    
                </div>

		        <div className='inicio3'>
                    <div className="texto-inicio">
                    <a className='imagen1' target="_blank" rel="noopener noreferrer" 
                        href="#"><img src={treintaiseis} alt="treintaiseis" width={120} height={60}/></a>
                    </div>                    
                </div>

            </div>

            <div className='inicio2'>
    <div className='inicio3'>
        <div className="texto-inicio">
            <a className='imagen1' target="_blank" rel="noopener noreferrer" href="#">
                <img src={veinticinco} alt="veinticinco" width={120} height={60} />
            </a>
        </div>
    </div>

    <div className='inicio3'>
        <div className="texto-inicio">
            <a className='imagen1' target="_blank" rel="noopener noreferrer" href="#">
                <img src={veintiseis} alt="veintiseis" width={120} height={60} />
            </a>
        </div>
    </div>

    <div className='inicio3'>
        <div className="texto-inicio">
            <a className='imagen1' target="_blank" rel="noopener noreferrer" href="#">
                <img src={veintisiete} alt="veintisiete" width={120} height={60} />
            </a>
        </div>
    </div>

    <div className='inicio3'>
        <div className="texto-inicio">
            <a className='imagen1' target="_blank" rel="noopener noreferrer" href="#">
                <img src={veintiocho} alt="veintiocho" width={120} height={60} />
            </a>
        </div>
    </div>

    <div className='inicio3'>
        <div className="texto-inicio">
            <a className='imagen1' target="_blank" rel="noopener noreferrer" href="#">
                <img src={veintinueve} alt="veintinueve" width={120} height={60} />
            </a>
        </div>
    </div>

    <div className='inicio3'>
        <div className="texto-inicio">
            <a className='imagen1' target="_blank" rel="noopener noreferrer" href="#">
                <img src={treinta} alt="treinta" width={120} height={60} />
            </a>
        </div>
    </div>
</div>

<div className='inicio2'>
    <div className='inicio3'>
        <div className="texto-inicio">
            <a className='imagen1' target="_blank" rel="noopener noreferrer" href="#">
                <img src={treintaiuno} alt="treintaiuno" width={120} height={60} />
            </a>
        </div>
    </div>

    <div className='inicio3'>
        <div className="texto-inicio">
            <a className='imagen1' target="_blank" rel="noopener noreferrer" href="#">
                <img src={treintaidos} alt="treintaidos" width={120} height={60} />
            </a>
        </div>
    </div>

    <div className='inicio3'>
        <div className="texto-inicio">
            <a className='imagen1' target="_blank" rel="noopener noreferrer" href="#">
                <img src={treintaitres} alt="treintaitres" width={120} height={60} />
            </a>
        </div>
    </div>

    <div className='inicio3'>
        <div className="texto-inicio">
            <a className='imagen1' target="_blank" rel="noopener noreferrer" href="#">
                <img src={treintaicuatro} alt="treintaicuatro" width={120} height={60} />
            </a>
        </div>
    </div>

    <div className='inicio3'>
        <div className="texto-inicio">
            <a className='imagen1' target="_blank" rel="noopener noreferrer" href="#">
                <img src={treintaicinco} alt="treintaicinco" width={120} height={60} />
            </a>
        </div>
    </div>

    <div className='inicio3'>
        <div className="texto-inicio">
            <a className='imagen1' target="_blank" rel="noopener noreferrer" href="#">
                <img src={treintaiseis} alt="treintaiseis" width={120} height={60} />
            </a>
        </div>
    </div>
</div>

<div className='inicio2'>
    <div className='inicio3'>
        <div className="texto-inicio">
            <a className='imagen1' target="_blank" rel="noopener noreferrer" href="#">
                <img src={treintaisiete} alt="treintaisiete" width={120} height={60} />
            </a>
        </div>
    </div>

    <div className='inicio3'>
        <div className="texto-inicio">
            <a className='imagen1' target="_blank" rel="noopener noreferrer" href="#">
                <img src={treintaiocho} alt="treintaiocho" width={120} height={60} />
            </a>
        </div>
    </div>

    <div className='inicio3'>
        <div className="texto-inicio">
            <a className='imagen1' target="_blank" rel="noopener noreferrer" href="#">
                <img src={treintainueve} alt="treintainueve" width={120} height={60} />
            </a>
        </div>
    </div>

    <div className='inicio3'>
        <div className="texto-inicio">
            <a className='imagen1' target="_blank" rel="noopener noreferrer" href="#">
                <img src={cuarenta} alt="cuarenta" width={120} height={60} />
            </a>
        </div>
    </div>

    <div className='inicio3'>
        <div className="texto-inicio">
            <a className='imagen1' target="_blank" rel="noopener noreferrer" href="#">
                <img src={cuarentaiuno} alt="cuarentaiuno" width={120} height={60} />
            </a>
        </div>
    </div>

    <div className='inicio3'>
        <div className="texto-inicio">
            <a className='imagen1' target="_blank" rel="noopener noreferrer" href="#">
                <img src={cuarentaidos} alt="cuarentaidos" width={120} height={60} />
            </a>
        </div>
    </div>
</div>

<div className='inicio2'>
    <div className='inicio3'>
        <div className="texto-inicio">
            <a className='imagen1' target="_blank" rel="noopener noreferrer" href="#">
                <img src={cuarentaitres} alt="cuarentaitres" width={120} height={60} />
            </a>
        </div>
    </div>

    <div className='inicio3'>
        <div className="texto-inicio">
            <a className='imagen1' target="_blank" rel="noopener noreferrer" href="#">
                <img src={cuarentaicuatro} alt="cuarentaicuatro" width={120} height={60} />
            </a>
        </div>
    </div>

    <div className='inicio3'>
        <div className="texto-inicio">
            <a className='imagen1' target="_blank" rel="noopener noreferrer" href="#">
                <img src={cuarentaicinco} alt="cuarentaicinco" width={120} height={60} />
            </a>
        </div>
    </div>

    <div className='inicio3'>
        <div className="texto-inicio">
            <a className='imagen1' target="_blank" rel="noopener noreferrer" href="#">
                <img src={cuarentaiseis} alt="cuarentaiseis" width={120} height={60} />
            </a>
        </div>
    </div>

    <div className='inicio3'>
        <div className="texto-inicio">
            <a className='imagen1' target="_blank" rel="noopener noreferrer" href="#">
                <img src={cuarentaisiete} alt="cuarentaisiete" width={120} height={60} />
            </a>
        </div>
    </div>

    <div className='inicio3'>
        <div className="texto-inicio">
            <a className='imagen1' target="_blank" rel="noopener noreferrer" href="#">
                <img src={cuarentaiocho} alt="cuarentaiocho" width={120} height={60} />
            </a>
        </div>
    </div>
</div>

<div className='inicio2'>
    <div className='inicio3'>
        <div className="texto-inicio">
            <a className='imagen1' target="_blank" rel="noopener noreferrer" href="#">
                <img src={cuarentainueve} alt="cuarentainueve" width={120} height={60} />
            </a>
        </div>
    </div>

    <div className='inicio3'>
        <div className="texto-inicio">
            <a className='imagen1' target="_blank" rel="noopener noreferrer" href="#">
                <img src={cincuenta} alt="cincuenta" width={120} height={60} />
            </a>
        </div>
    </div>

    <div className='inicio3'>
        <div className="texto-inicio">
            <a className='imagen1' target="_blank" rel="noopener noreferrer" href="#">
                <img src={cincuentaiuno} alt="cincuentaiuno" width={120} height={60} />
            </a>
        </div>
    </div>

    <div className='inicio3'>
        <div className="texto-inicio">
            <a className='imagen1' target="_blank" rel="noopener noreferrer" href="#">
                <img src={cincuentaidos} alt="cincuentaidos" width={120} height={60} />
            </a>
        </div>
    </div>

    <div className='inicio3'>
        <div className="texto-inicio">
            <a className='imagen1' target="_blank" rel="noopener noreferrer" href="#">
                <img src={cincuentaitres} alt="cincuentaitres" width={120} height={60} />
            </a>
        </div>
    </div>

    <div className='inicio3'>
        <div className="texto-inicio">
            <a className='imagen1' target="_blank" rel="noopener noreferrer" href="#">
                <img src={cincuentaicuatro} alt="cincuentaicuatro" width={120} height={60} />
            </a>
        </div>
    </div>
</div>

<div className='inicio2'>
    <div className='inicio3'>
        <div className="texto-inicio">
            <a className='imagen1' target="_blank" rel="noopener noreferrer" href="#">
                <img src={cincuentaicinco} alt="cincuentaicinco" width={120} height={60} />
            </a>
        </div>
    </div>

    <div className='inicio3'>
        <div className="texto-inicio">
            <a className='imagen1' target="_blank" rel="noopener noreferrer" href="#">
                <img src={cincuentaiseis} alt="cincuentaiseis" width={120} height={60} />
            </a>
        </div>
    </div>

    <div className='inicio3'>
        <div className="texto-inicio">
            <a className='imagen1' target="_blank" rel="noopener noreferrer" href="#">
                <img src={cincuentaisiete} alt="cincuentaisiete" width={120} height={60} />
            </a>
        </div>
    </div>

    <div className='inicio3'>
        <div className="texto-inicio">
            <a className='imagen1' target="_blank" rel="noopener noreferrer" href="#">
                <img src={cincuentaiocho} alt="cincuentaiocho" width={120} height={60} />
            </a>
        </div>
    </div>

    <div className='inicio3'>
        <div className="texto-inicio">
            <a className='imagen1' target="_blank" rel="noopener noreferrer" href="#">
                <img src={cincuentainueve} alt="cincuentainueve" width={120} height={60} />
            </a>
        </div>
    </div>

    <div className='inicio3'>
        <div className="texto-inicio">
            <a className='imagen1' target="_blank" rel="noopener noreferrer" href="#">
                <img src={sesenta} alt="sesenta" width={120} height={60} />
            </a>
        </div>
    </div>
</div>

<div className='inicio2'>
    <div className='inicio3'>
        <div className="texto-inicio">
            <a className='imagen1' target="_blank" rel="noopener noreferrer" href="#">
                <img src={sesentaiuno} alt="sesentaiuno" width={120} height={60} />
            </a>
        </div>
    </div>

    <div className='inicio3'>
        <div className="texto-inicio">
            <a className='imagen1' target="_blank" rel="noopener noreferrer" href="#">
                <img src={sesentaidos} alt="sesentaidos" width={120} height={60} />
            </a>
        </div>
    </div>

    <div className='inicio3'>
        <div className="texto-inicio">
            <a className='imagen1' target="_blank" rel="noopener noreferrer" href="#">
                <img src={sesentaitres} alt="sesentaitres" width={120} height={60} />
            </a>
        </div>
    </div>

    <div className='inicio3'>
        <div className="texto-inicio">
            <a className='imagen1' target="_blank" rel="noopener noreferrer" href="#">
                <img src={sesentaicuatro} alt="sesentaicuatro" width={120} height={60} />
            </a>
        </div>
    </div>

    <div className='inicio3'>
        <div className="texto-inicio">
            <a className='imagen1' target="_blank" rel="noopener noreferrer" href="#">
                <img src={sesentaicinco} alt="sesentaicinco" width={120} height={60} />
            </a>
        </div>
    </div>

    <div className='inicio3'>
        <div className="texto-inicio">
            <a className='imagen1' target="_blank" rel="noopener noreferrer" href="#">
                <img src={sesentaiseis} alt="sesentaiseis" width={120} height={60} />
            </a>
        </div>
    </div>
</div>

<div className='inicio2'>
    <div className='inicio3'>
        <div className="texto-inicio">
            <a className='imagen1' target="_blank" rel="noopener noreferrer" href="#">
                <img src={sesentaisiete} alt="sesentaisiete" width={120} height={60} />
            </a>
        </div>
    </div>

    <div className='inicio3'>
        <div className="texto-inicio">
            <a className='imagen1' target="_blank" rel="noopener noreferrer" href="#">
                <img src={sesentaiocho} alt="sesentaiocho" width={120} height={60} />
            </a>
        </div>
    </div>

    <div className='inicio3'>
        <div className="texto-inicio">
            <a className='imagen1' target="_blank" rel="noopener noreferrer" href="#">
                <img src={sesentainueve} alt="sesentainueve" width={120} height={60} />
            </a>
        </div>
    </div>

    <div className='inicio3'>
        <div className="texto-inicio">
            <a className='imagen1' target="_blank" rel="noopener noreferrer" href="#">
                <img src={setenta} alt="setenta" width={120} height={60} />
            </a>
        </div>
    </div>

    <div className='inicio3'>
        <div className="texto-inicio">
            <a className='imagen1' target="_blank" rel="noopener noreferrer" href="#">
                <img src={setentaiuno} alt="setentaiuno" width={120} height={60} />
            </a>
        </div>
    </div>

    <div className='inicio3'>
        <div className="texto-inicio">
            <a className='imagen1' target="_blank" rel="noopener noreferrer" href="#">
                <img src={setentaidos} alt="setentaidos" width={120} height={60} />
            </a>
        </div>
    </div>
</div>

<div className='inicio2'>
    <div className='inicio3'>
        <div className="texto-inicio">
            <a className='imagen1' target="_blank" rel="noopener noreferrer" href="#">
                <img src={setentaitres} alt="setentaitres" width={120} height={60} />
            </a>
        </div>
    </div>

    <div className='inicio3'>
        <div className="texto-inicio">
            <a className='imagen1' target="_blank" rel="noopener noreferrer" href="#">
                <img src={setentaicuatro} alt="setentaicuatro" width={120} height={60} />
            </a>
        </div>
    </div>

    <div className='inicio3'>
        <div className="texto-inicio">
            <a className='imagen1' target="_blank" rel="noopener noreferrer" href="#">
                <img src={setentaicinco} alt="setentaicinco" width={120} height={60} />
            </a>
        </div>
    </div>

    <div className='inicio3'>
        <div className="texto-inicio">
            <a className='imagen1' target="_blank" rel="noopener noreferrer" href="#">
                <img src={setentaiseis} alt="setentaiseis" width={120} height={60} />
            </a>
        </div>
    </div>

    <div className='inicio3'>
        <div className="texto-inicio">
            <a className='imagen1' target="_blank" rel="noopener noreferrer" href="#">
                <img src={setentaisiete} alt="setentaisiete" width={120} height={60} />
            </a>
        </div>
    </div>

    <div className='inicio3'>
        <div className="texto-inicio">
            <a className='imagen1' target="_blank" rel="noopener noreferrer" href="#">
                <img src={setentaiocho} alt="setentaiocho" width={120} height={60} />
            </a>
        </div>
    </div>
</div>

<div className='inicio2'>

    <div className='inicio3'>
        <div className="texto-inicio">
            <a className='imagen1' target="_blank" rel="noopener noreferrer" href="#">
                <img src={setentainueve} alt="setentainueve" width={120} height={60} />
            </a>
        </div>
    </div>

    <div className='inicio3'>
        <div className="texto-inicio">
            <a className='imagen1' target="_blank" rel="noopener noreferrer" href="#">
                <img src={ochenta} alt="ochenta" width={120} height={60} />
            </a>
        </div>
    </div>

    <div className='inicio3'>
        <div className="texto-inicio">
            <a className='imagen1' target="_blank" rel="noopener noreferrer" href="#">
                <img src={ochentaiuno} alt="ochentaiuno" width={120} height={60} />
            </a>
        </div>
    </div>

    <div className='inicio3'>
        <div className="texto-inicio">
            <a className='imagen1' target="_blank" rel="noopener noreferrer" href="#">
                <img src={ochentaidos} alt="ochentaidos" width={120} height={60} />
            </a>
        </div>
    </div>

    <div className='inicio3'>
        <div className="texto-inicio">
            <a className='imagen1' target="_blank" rel="noopener noreferrer" href="#">
                <img src={ochentaitres} alt="ochentaitres" width={120} height={60} />
            </a>
        </div>
    </div>

    <div className='inicio3'>
        <div className="texto-inicio">
            <a className='imagen1' target="_blank" rel="noopener noreferrer" href="#">
                <img src={ochentaicuatro} alt="ochentaicuatro" width={120} height={60} />
            </a>
        </div>
    </div>
</div>
            

            <footer>
                <div className='piepagina'>                
                    
                    <div className='pie'>                        
                        <h2><a className='imagen1' target="_blank" rel="noopener noreferrer" 
                        href="https://mundosolucionesnet.vercel.app/">MUNDO SOLUCIONES.NET</a></h2>
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

export default Inicio; 

