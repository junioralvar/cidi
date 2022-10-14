import Accordion from 'react-bootstrap/Accordion';
import {TableAlert} from './Table'

function Acordion() {
    return (
        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header>Alerta Bibliográfica 2010 </Accordion.Header>
                <Accordion.Body>
                    <TableAlert />
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Alerta Bibliográfica 2011 </Accordion.Header>
                <Accordion.Body>
                    <TableAlert />
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>Alerta Bibliográfica 2012 </Accordion.Header>
                <Accordion.Body>
                    <TableAlert />
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
                <Accordion.Header>Alerta Bibliográfica 2013 </Accordion.Header>
                <Accordion.Body>
                    <TableAlert />
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>

        
    );
}

export default Acordion;