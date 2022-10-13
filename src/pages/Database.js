import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Libros } from '../components/cards'
import '../styles/Cards.css'
import Footer from '../components/Footer'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


const Database = () => {
  return (
    <div>
      <Container className='my-5'>
        <div className='gallery'>
         
          <Libros
            imagen='bibliotecaNacional'
            titulo='Biblioteca Nacional del Perú'
            url='bnp.gob.pe/'
            a='Ir al sitio web' />
            
          <Libros
            imagen='miguelCervantes'
            titulo='Biblioteca Virtual Miguel de Cervantes'
            url='cervantesvirtual.com/'
            a='Ir al sitio web' />
          <Libros
            imagen='unmsm'
            titulo='Universidad Nacional Mayor de San Marcos'
            url='sisbib.unmsm.edu.pe/index.php?option=com_content&task=view&id=73&Itemid=150'
            a='Ir al sitio web' />
          <Libros
            imagen='upc'
            titulo='Universidad Nacional de Ciencias Aplicadas'
            url='biblioteca.upc.edu.pe/portal/presentacion'
            a='Ir al sitio web' />

          
          

          <Libros
            imagen='unjfsc'
            url='unjfsc.edu.pe/biblioplax/'
            titulo='Universidad Nacional Jose Faustino Sanchez Carrión'
            a='Ir al sitio web' />

          <Libros
            imagen='urp'
            titulo='Universidad Ricado Palma'
            url='urp.edu.pe/pregrado/facultad-de-ingenieria/bvi/'
            a='Ir al sitio web' />




          <Libros
            imagen='cybertesis'
            titulo='CyberTesis'
            url='cybertesis.unmsm.edu.pe/'
            a='Ir al sitio Web' />
          
          <Libros
            imagen='diccionarioIngenieriaElectrica'
            titulo='Diccionario de Ingeniería Electrica'
            url='electricidad.usal.es/Principal/Circuitos/Diccionario/Inicio.php'
            a='Ir al sitio Web' />
          
          <Libros
            imagen='una'
            titulo='Universidad Nacional Agraria'
            url='tumi.lamolina.edu.pe/ban/'
            a='Ir al sitio web' />
          <Libros
            imagen='up'
            titulo='Universidad del Pacifico'
            url='up.edu.pe/investigacion-centros'
            a='Ir al sitio web' />
          <Libros
            imagen='uc'
            titulo='Universidad Continenetal'
            url='repositorio.continental.edu.pe/'
            a='Ir al sitio web' />
          <Libros
            imagen='usil'
            titulo='Universidad San Ignacio de Loyola'
            url='biblioteca.usil.edu.pe/biblioteca-virtual'
            a='Ir al sitio web' />

         
          <Libros
            imagen='utp'
            titulo='Universidad Tecnologica del Perú'
            url='utp.edu.pe/investigacion'
            a='Ir al sitio web' />








          <Libros
            imagen='realSocial'
            titulo='Real Social Matemática Española'
            url='rsme.es/category/publicaciones/biblioteca-estimulos-matematicos/'
            a='Ir al sitio Web' />
          <Libros
            imagen='rae'
            titulo='Real Academia Española'
            url='rae.es/'
            a='Ir al sitio Web' />

        
          <Libros
            imagen='pucp'
            titulo='Pontificia Universidad Catolica del Perú'
            url='pucp.edu.pe/servicio/ambientes-de-estudio/biblioteca-alberto-flores-galindo-ciencias-sociales/'
            a='Ir al sitio web' />

          <Libros
            imagen='uni'
            titulo='Universidad Nacional de Ingeniería'
            url='bibliotecacentral.uni.edu.pe/'
            a='Ir al sitio web' />

          <Libros
            imagen='usmp'
            titulo='Universidad de San Martin de Porres'
            url='repositorio.usmp.edu.pe/'
            a='Ir al sitio web' />
          <Libros
            imagen='upn'
            titulo='Universida Privada del Norte'
            url='upn.edu.pe/investigacion'
            a='Ir al sitio web' />
          <Libros
            imagen='unsam'
            titulo='Universidad Nacional Santiago de Antuanez Mayolo'
            url='unasam.edu.pe/'
            a='Ir al sitio web' />
            <Libros 
            
            imagen='unfv-2'
            titulo='Universidad Nacional Federico Villareal'
            url='web2.unfv.edu.pe/Sitio/servicio-institucional/sistema-de-bibliotecas-unfv'
            a='Ir al sitio web' />
            <Libros
            imagen='uncallao'
            titulo='Universidad Nacional del Callao'
            url='vri.unac.edu.pe/'
            a='Ir al sitio web' />
             <Libros
            imagen='unc'
            titulo='Universidad Nacional de Cajamarca'
            url='fedu.unc.edu.pe/Sitios/VisualizarSitios?tipo=2'
            a='Ir al sitio web' />
             <Libros
            imagen='dialnet'
            titulo='Dialnet'
            url='dialnet.unirioja.es/'
            a='Ir al sitio web' />
          <Libros
            imagen='biblioPoli'
            titulo='Bibliopoli Blog'
            url='bibliopoli.wordpress.com/12-bases-de-datos-de-acceso-abierto/'
            a='Ir al sitio web' />
            <Libros
            imagen='redalyc'
            titulo='Redalyc'
            url='redalyc.org/'
            a='Ir al sitio web' />
            <Libros
            imagen='eLibro'
            titulo='e-Libro'
            url='e-libro.net/default.aspx'
            a='Ir al sitio Web' />
              <Libros
            imagen='library'
            titulo='Library of Congress'
            url='loc.gov/'
            a='Ir al sitio web' />

        </div>

        <Row className='my-5'>
          <Col className='my-5'>
            <h6 className='text-danger text-center'>CONSEJO DEPARTAMENTAL DE LIMA</h6>
            <h3 className='text-dark text-center'>Enlaces de Interes</h3>

          </Col>
        </Row>
        <Row>
          <Col>
            <Card body className='text-center text-dark my-5'>
              <Link 
              to={{ pathname: `//cip.org.pe/documentos-normativos/` }} 
              target='_blank' 
              className='text-dark ancla text-center'>Normatividad del CIP</Link>
            </Card>
          </Col>
          <Col>
            <Card body className='text-center text-dark my-5'>
              <Link to={{ pathname: `//cip.org.pe/consejos-departamentales/` }} 
              target='_blank'
               className='text-dark ancla text-center'>Consejos Departamentales a Nivel Nacional</Link></Card>
          </Col>
          <Col>
            <Card body className='text-center text-dark my-5'>
              <Link to={{ pathname: `//acofi.edu.co/events/` }} 
              target='_blank'
               className='text-dark ancla text-center'>Asociación Colombiana de Facultades de Ingeniería</Link></Card>
          </Col>
          <Col>
            <Card body className='text-center text-dark my-5'>
              <Link to={{ pathname: `//ingenieros.cl/` }} 
              target='_blank'
               className='text-dark ancla text-center'>Colegio de Ingenieros de Chile A.G.</Link></Card>
          </Col>
        </Row>
      </Container>


      <Footer />

    </div>
  )
}
export default Database;