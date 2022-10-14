
/*import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';*/
import Login from '../components/Login'
import '../styles/Admin.css'
import favicon from '../imagenes/favicon.ico'

const Administrador = () => {

    const user = 'admin'
    const password = 'admin'

    return(
        <div >     
           <center className='my-3'><img 
            src={favicon}
            alt='logo'/></center> 
            <h1 className='my-5 text-center'>Iniciar Sesión</h1>            
            <Login 
            usuario={user}
            clave={password}
            />           
        </ div>
    )
}
export default Administrador;