import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo_navbar from '../imagenes/logo_navbar.gif'
import '../styles/navbar.css'

export function NavBarExample() {
  return (
    <>
      <Navbar  expand="lg" className='navBg sticky-top' variant='dark'>
        <Container>
          <Navbar.Brand as={Link} to='/'>
            <img src={logo_navbar} 
              alt='logo'
              className='logo-navbar'/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">              
              <Nav.Link as={Link} className='font-text text-navbar'  to='About' >Quienes Somos</Nav.Link>
              <Nav.Link as={Link} className='font-text text-navbar'  to='Database' >Base de datos</Nav.Link>
              <Nav.Link as={Link} className='font-text text-navbar'  to='Service' >Servicios</Nav.Link>
              <Nav.Link as={Link} className='font-text text-navbar'  to='Regulation' >Reglamento</Nav.Link>
              <Nav.Link as={Link} className='font-text text-navbar'  to='Alert' >Alerta Bibliográfica</Nav.Link>
              <Nav.Link as={Link} className='font-text text-navbar'  to='Newspaper' >Hemeroteca</Nav.Link>
              <Nav.Link as={Link} className='font-text text-navbar'  to='Contact' >Contacto</Nav.Link>
              <Nav.Link as={Link} className='font-text text-navbar'  to='Catalogue' >Catálogo</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <section>
        <Outlet></Outlet>
      </section>

    </>
  )
}
