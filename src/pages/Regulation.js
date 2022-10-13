import Footer from '../components/Footer'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Icono } from '../components/cards'
import '../styles/Regulation.css'
import  reglamento  from '../document/reglamento.pdf'

const Regulation = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <div className='servicios my-5 text-center'>
                            <h4 className="text-center text-dark ">REGLAMENTO DEL CENTRO DE INFORMACIÓN Y DOCUMENTACIÓN DE INGENIERÍA-CIDI </h4>
                            <h5 className="text-center text-dark ">CONSEJO DEPARTAMENTAL DE LIMA  </h5>
                            <h5 className="text-center text-dark "> COLEGIO DE INGENIEROS DEL PERU  </h5>
                            
                              <center><Icono
                                    icono='pdf-1' /></center>  
                               
                               <a style={{textDecoration:'none'}} href={reglamento} download >Descargar</a> 
                            
                        </div>
                    </Col>
                </Row>

            </Container>
            <Footer />
        </div>
    )
}
export default Regulation;