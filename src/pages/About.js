import Footer from '../components/Footer'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



const About = () => {
    return(
        <div>
            <Container>
                <Row>
                    <Col>
                        <div className='servicios'>
                            <h3 className="text-center text-dark my-5">CENTRO DE INFORMACIÓN Y DOCUMENTACIÓN DE INGENIERÍA VIRTUAL (CIDIV)</h3>
                            <p><strong>Visión</strong></p>
                            <p>El CIDIV dentro del Consejo Departamental de Lima-Colegio de Ingenieros del Perú, abarca toda la información de las distintas especialidades de la ingeniería, que nos lleva a servir a todos los ingenieros colegiados.</p>
                            <p>Esto con lleva a uniformizar o estandarizar la información, a través de soportes de las diferentes banco de datos a los cuales alimentamos con las diferentes bibliografías que nos llega, tanto nacional como internacional.</p>
                            <p><strong>Misión</strong></p>
                            <p>Nuestra Misión es lograr que la Información referente a la Ingeniería sea la más asequible y la mejor forma de llegar a ella utilizando todos los soportes tanto tecnológicos e impresos, y que el colegiado redunde sus conocimientos al obtener una mayor información siendo, los fines que busca la institución.</p>
                            <p><strong>Objetivos</strong></p>
                            <p>Mantener uniformizada la colección de bibliografía, como: congresos, simposium, forum, libros especializados, tesis, revistas que forman nuestra hemeroteca.</p>
                            <p>Promover las diferentes informaciones a todo el personal interno y a todos los colegiados como son las síntesis de Normas legales, que se remite semanalmente y la Alerta bibliográfica emitida mensualmente, como las diferentes informaciones que nos envían algunas instituciones.</p>
                        </div>
                    </Col>
                </Row>

            </Container>
            <Footer />
        </div>
    )
}
export default About;