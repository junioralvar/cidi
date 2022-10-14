import Footer from '../components/Footer'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Acordion from '../components/Acordion';
const Alert = () => {
    return(
        <>
        <Container>
            <Row>
                <Col className='my-5'>
                <h1 className='text-center'>Alerta Bibliografica</h1>
                <p className='fw-bold my-5'>La Alerta Bibliográfica del Centro de Información y Documentación de Ingeniería (CIDI) es un medio a través del cual damos cuenta a los ingenieros colegiados sobre nuestras nuevas adquisiciones, las cuales ponemos a disposición de los interesados. Esta información tiene una periodicidad mensual y, además de encontrarse alojada en esta página, es enviada por correo electrónico oportunamente a todos los ingenieros colegiados y habilitados.</p>
                </Col>
            </Row>
            <Row>
                <Col>
                <Acordion />
                </Col>
            </Row>
        </Container>

        <Footer />
            
        </>
    )
}
export default Alert;