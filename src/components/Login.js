import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import '../styles/Admin.css'

function Login(props) {
  

  return (
    <center>
      <Card style={{ width: '30rem' }} className='card' >
        <Card.Body>
          <Form>
            <Form.Group className="mb-5" >
              <Form.Label>Usuario</Form.Label>
              <Form.Control type="text" placeholder="Ingrese su nombre de usuario" name={props.usuario}/>
            </Form.Group>
            <Form.Group className="mb-3" >
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="password" placeholder="Ingrese su contraseña" name={props.clave}/>
            </Form.Group>
            <Button variant="dark" type="submit" >
              Ingresar
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </center>
  );
  

}

export default Login;