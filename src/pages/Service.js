import Footer from '../components/Footer'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styles/servicios.css'
import { FiChevronRight } from "react-icons/fi";

const Service = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <div className='servicios'>
                            <h3 className="text-center text-dark my-5">SERVICIOS</h3>
                            <p>El <strong>CIDI</strong> acopia y permite el acceso a la información existente en El Centro de Documentación e Información en Ingeniería del Consejo Departamental Lima del Colegio de Ingenieros del Perú, realizando consultas en línea, desde cualquier computadora conectada a Internet.</p>
                            <p>El <strong>CIDI</strong> es una unidad de información interactiva, que permite a sus miembros sugerir la adquisición de nuevos recursos de información, tanto físicos como virtuales a través de una lista de interés, que los conecta con las bibliotecas de los diferentes Consejos Departamentales.</p>
                            <p>Este servicio reúne información referencial (colecciones bibliográficas, hemerográficas, de tesis, etc.) e información digital de interés para los Ingenieros, existente en Internet (Terminologías, Normas Legales, Diccionarios, Libros, revistas, tesis, páginas web, documentos electrónicos, etc.)</p>
                            <p><strong>Brindamos:</strong></p>
                            <p><FiChevronRight />Servicio de Consulta en Sala</p>
                            <p><FiChevronRight />Servicio de Referencia</p>
                            <p><FiChevronRight />Servicio de Reprografía</p>
                        </div>
                    </Col>
                </Row>

            </Container>
            <Footer />
        </div>
    )
}
export default Service;