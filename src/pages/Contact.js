import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import cidi from '../imagenes/cidi-old.jpg';
import { AiTwotoneMail } from "react-icons/ai";
import { FcCalendar, FcClock } from "react-icons/fc";
import Footer from '../components/Footer'
import '../styles/Contact.css'


const Contact = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <div className='servicios'>
                            <h3 className="text-center text-primary my-5">CONTACTO</h3>
                            <p className='text-center text-dark' > Gaby Roldan</p>
                            <p className='text-center text-dark' >Responsable del CIDI</p>
                            <p className='text-center text-primary' ><AiTwotoneMail /><strong> cidi@ciplima.org.pe</strong></p><br />
                            <p className='text-center text-primary' ><strong>Atención</strong></p>
                            <p className='text-center text-dark' ><FcCalendar /> Lunes a viernes</p>
                            <p className='text-center text-dark' ><FcClock /> 9:00 am a 4:30 pm</p>
                            <center>
                                <img
                                    src={cidi}
                                    alt='cidi-old' 
                                    className='img-cidi-old'                                                                       
                                    />
                            </center>
                        </div>
                    </Col>
                </Row>

            </Container>
            <Footer />
        </div>
    )
}
export default Contact;