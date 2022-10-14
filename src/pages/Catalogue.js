import Buscador from '../components/Buscador'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {TableCatalogue} from '../components/Table';
import Footer from '../components/Footer';


const Catalogue = () => {
    return (
        <>
            <Container className='my-5'>
                <Row>
                    <Col>
                        <Buscador />
                    </Col>
                </Row>
                <Row className='my-5'>
                    <Col>
                        <TableCatalogue />
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    )
}
export default Catalogue;