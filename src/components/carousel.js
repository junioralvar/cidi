import Carousel from 'react-bootstrap/Carousel';
import cdlima from '../imagenes/cdlima.png'
import ambiente from '../imagenes/ambiente.jpg'
import libros from '../imagenes/libros.jpg'
import '../App.css';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom'
import '../styles/Boton.css'
import 'animate.css';


function Slider() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 alt-img-slider"
          src={cdlima}
          alt="First slide"
        />
        <Carousel.Caption>
          <div className="mb-2">
            <Button variant="danger" size="lg" className='button-top'  >
              <NavLink to='Database' className='button-navlink '>BASE DE DATOS</NavLink>
            </Button>{''}
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 alt-img-slider"
          src={ambiente}
          alt="Second slide"
        />
        <Carousel.Caption>
          <div className="mb-2">
            <Button variant="danger" size="lg" className='button-top'>
              <NavLink to='Newspaper' className='button-navlink'>HEMEROTECA</NavLink>
            </Button>{' '}
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 alt-img-slider "
          src={libros}
          alt="Third slide"
        />
        <Carousel.Caption>
          <div className="mb-2">
            <Button variant="danger" size="lg" className='button-top'>
              <NavLink to='Catalogue' className='button-navlink'>CATALOGO EN LÍNEA</NavLink>
            </Button>{' '}
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;