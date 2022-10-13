import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../styles/Cards.css'
//import { FiChevronRight } from 'react-icons/fi';
import document from '../imagenes/document-icono.png'
import { Link } from 'react-router-dom';

export function Tarjeta() {
  return (
    <Container>
      <Row>
        <Col>
          <center>
            <Link className='text-decoration' to={{ pathname: `//ciplima.org.pe/cidi/cidivirtual/normaslegalessite.html` }} target='_blank'>
              <Button variant='light' >
                <img
                  src={document}
                  alt='documento'
                  className='img-card'
                /><br />
                Síntesis de Normas legales <br /> "El Peruano"
              </Button>
            </Link>
          </center>
        </Col>
        <Col>
          <center>
            <Link className='text-decoration' to={{ pathname: `//ciplima.org.pe/cidi/cidivirtual/publicaciones.html` }} target='_blank'>
              <Button variant='light' >
                <img
                  src={document}
                  alt='documento'
                  className='img-card'
                /><br />
                Publicaciones del Consejo Departamental Lima <br /> Colegio de Ingenieros del Perú
              </Button>
            </Link>
          </center>
        </Col>
      </Row>
      <Row className='my-5'>
        <Col>
          <center>
            <Link className='text-decoration' to={{ pathname: `//ciplima.org.pe/cidi/cidivirtual/ntp_envases.html` }} target='_blank'>
              <Button variant='light' >
                <img
                  src={document}
                  alt='documento'
                  className='img-card'
                /><br />
                NTP Envase y Embalaje
              </Button>
            </Link>
          </center>
        </Col>
        <Col>
          <center>
            <Link className='text-decoration' to={{ pathname: `//ciplima.org.pe/cidi/cidivirtual/ntp_fluidos.html` }} target='_blank'>
              <Button variant='light' >
                <img
                  src={document}
                  alt='documento'
                  className='img-card'
                /><br />
                NTP Transporte de Fluidos
              </Button>
            </Link>
          </center>
        </Col>
      </Row>
    </Container>
  );
}

export function Libros(props) {
  return (
    <Container>
      <Card className='card-espacio'>
        <Card.Img variant="top" src={require(`../imagenes/BaseLogos/${props.imagen}.png`)} />
        <Card.Body>
          <Card.Title className='text-center'>{props.titulo}</Card.Title>
          <center><Link className='text-decoration' to={{ pathname: `//${props.url}` }} target='_blank'>{props.a}</Link></center>
        </Card.Body>
      </Card>
    </Container>
  )
}

export function Icono(props) {
  return (
    <Container>
      <Row>
        <Col>
          <center> <img className='icono'
            src={require(`../imagenes/${props.icono}.png`)}
            alt='icono'
          /></center>
        </Col>
      </Row>
    </Container>
  )
}
