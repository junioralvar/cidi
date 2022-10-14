import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Buscador() {
    return (
        <>
            <h1>Busqueda</h1>

            <Form.Group className="mb-3">
                <Form.Label>Filtrar busqueda por</Form.Label>
                <Form.Select >
                    <option>Todos los campos</option>
                    <option>Autor</option>
                    <option>Titulo</option>
                </Form.Select>
            </Form.Group>
            <Form className="d-flex">


                <Form.Control
                    type="search"
                    placeholder="Ingrese palabra clave"
                    className="me-2"
                    aria-label="Search"
                />
                <Button variant="outline-dark">Buscar</Button>
            </Form>
        </>
    );
}

export default Buscador;