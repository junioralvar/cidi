import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo_footer from '../imagenes/logo_footer.png'
import '../styles/Footer.css'
import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTiktok } from 'react-icons/fa';
import reclamaciones from '../imagenes/libro_reclamaciones.png'
import { FaFax } from 'react-icons/fa';
import { FaMailBulk } from 'react-icons/fa';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaRegListAlt } from 'react-icons/fa';
import mapa from '../imagenes/mapa.png'
//import Button from 'react-bootstrap/Button';

function Footer() {
  const openInNewTab = url => {
    // 👇️ setting target to _blank with window.open
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <Container fluid className='bg-footer '>
      <Row >
        <Col>
        </Col>
        <Col>
          <img src={logo_footer}
            alt='logo'
            className='logo-footer my-5' />
          <p className='text-white fs-6 cursor'>
             El Colegio de Ingenieros del Perú, fue creado en el año 1962, tiene desde 1987 una estructura descentralizada, por lo que existen 28 consejos departamentales CIP en todo el país.
          </p>
          <FaFacebook className='ico-size' />
          <FaTwitter className='ico-size' />
          <FaYoutube className='ico-size' />
          <FaLinkedin className='ico-size' />
          <FaInstagram className='ico-size' />
          <FaTiktok className='ico-size' /><br/>
          <center><img src={reclamaciones} alt='libro de reclamaciones' className='reclamos'/></center>
        </Col>
        <Col>
          <h6 className='text-white fw-bolder my-5 font-text text-center'>CAPÍTULOS DE INGENIERÍA</h6>
          <Row>
            <Col>
              <a className='cursor' onClick={() => openInNewTab('https://agricola.cdlima.org.pe')} >Agrícola</a > <br />
              <a className='cursor' onClick={() => openInNewTab('https://agronomica.cdlima.org.pe')}>Agronómica</a > <br />
              <a className='cursor' onClick={() => openInNewTab('https://alimentarias.cdlima.org.pe')}>Alimentarias</a > <br />
              <a className='cursor' onClick={() => openInNewTab('https://civil.cdlima.org.pe')}>Civil</a > <br />
              <a className='cursor' onClick={() => openInNewTab('https://economica.cdlima.org.pe')}>Económica</a > <br />
              <a className='cursor' onClick={() => openInNewTab('https://electrica.cdlima.org.pe')}>Eléctrica</a > <br />
              <a className='cursor' onClick={() => openInNewTab('https://electronica.cdlima.org.pe')}>Electrónica</a > <br />
              <a className='cursor' onClick={() => openInNewTab('https://forestal.cdlima.org.pe')}>Forestal</a > <br />
              <a className='cursor' onClick={() => openInNewTab('https://geologica.cdlima.org.pe')}>Geológica</a > <br />
              <a className='cursor' onClick={() => openInNewTab('https://industrial.cdlima.org.pe')}>Industrial Sistemas</a > <br />
            </Col>
            <Col>
              <a className='cursor' onClick={() => openInNewTab('https://mecanica.cdlima.org.pe')}>Mecánica Eléctrica</a > <br />
              <a className='cursor' onClick={() => openInNewTab('https://metalurgica.cdlima.org.pe')}>Metalurgia</a > <br />
              <a className='cursor' onClick={() => openInNewTab('https://minas.cdlima.org.pe')}>Minas</a > <br />
              <a className='cursor' onClick={() => openInNewTab('https://pesquera.cdlima.org.pe')}>Pesquera</a > <br />
              <a className='cursor' onClick={() => openInNewTab('https://petroquimica.cdlima.org.pe')}>Petróleo Petroquímica</a > <br />
              <a className='cursor' onClick={() => openInNewTab('https://quimica.cdlima.org.pe')}>Química</a > <br />
              <a className='cursor' onClick={() => openInNewTab('https://sanitaria.cdlima.org.pe')}>Sanitaria</a > <br />
              <a className='cursor' onClick={() => openInNewTab('https://geografica.cdlima.org.pe')}>Geográfica</a > <br />
              <a className='cursor' onClick={() => openInNewTab('https://ambiental.cdlima.org.pe')}>Ambiental</a > <br />
            </Col>
          </Row>
        </Col>
        <Col>
          <h6 className='text-white fw-bolder my-5 font-text text-center'>DE INTERÉS PÚBLICO</h6>
          <Row>
            <Col>
              <a className='cursor' onClick={() => openInNewTab('https://cdlima.org.pe/asesoria-legal/')} >Asesoría legal</a > <br />
              <a className='cursor' onClick={() => openInNewTab('https://cdlima.org.pe/ayuda-solidaria/')}>Ayuda solidaria</a > <br />
              <a className='cursor' onClick={() => openInNewTab('https://cdlima.org.pe/balances-y-memorias/')}>Balances y memorias</a > <br />
              <a className='cursor' onClick={() => openInNewTab('https://cdlima.org.pe/#')}>Cabinas de internet</a > <br />
              <a className='cursor' onClick={() => openInNewTab('https://cdlima.org.pe/comite-de-eventos-y-damas/')}>Cómite de damas</a > <br />
              <a className='cursor' onClick={() => openInNewTab('https://cdlima.org.pe/comision-de-adquisiciones/')}>Comisión y adquisiciones</a > <br />
              <a className='cursor' onClick={() => openInNewTab('https://cdlima.org.pe/comision-de-deportes/')}>Comisión deportes</a > <br />
              <a className='cursor' onClick={() => openInNewTab('https://cdlima.org.pe/consultorio-medico/')}>Consultorio médico</a > <br />
            </Col>
            <Col>
              <a className='cursor' onClick={() => openInNewTab('https://cdlima.org.pe/coro-polifonico/')}>Coro polifónico</a > <br />
              <a className='cursor' onClick={() => openInNewTab('https://cdlima.org.pe/defensa-profesional/')}>Defensa profesional</a > <br />
              <a className='cursor' onClick={() => openInNewTab('https://cdlima.org.pe/fondo-mutual/')}>Fondo mutual</a > <br />
              <a className='cursor' onClick={() => openInNewTab('https://cdlima.org.pe/formalizacion/')}>Formalización</a > <br />
              <a className='cursor' onClick={() => openInNewTab('https://cdlima.org.pe/resolucion-de-comisiones/')}>Resolución de comisiones</a > <br />
              <a className='cursor' onClick={() => openInNewTab('https://cdlima.org.pe/revisora-de-cuentas/')}>Revisora de cuentas</a > <br />
            </Col>
          </Row>
        </Col>
        <Col>
          <h6 className='text-white fw-bolder my-5 font-text text-center'>DETALLE DE CONTACTO</h6>
          <p className='text-white text-contact'><FaFax className='ico-size' />  (+01) 202-5000 <br /> </p>
          <p className='text-white text-contact'><FaMailBulk className='ico-size' />  informes@ciplima.org.pe <br /> </p>
          <p className='text-white text-contact'><FaMapMarkerAlt className='ico-size' />  Calle Barcelona 240 San Isidro – Lima (Perú) <br /> </p>
          <p className='text-white text-contact'><FaRegListAlt className='ico-size' />  Lunes a Viernes de 08:00 a 20:00 Horas <br /> </p>
          <img src={mapa} alt='mapa' />
        </Col>
        <Col>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;