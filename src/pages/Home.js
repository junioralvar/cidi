import Slider from '../components/carousel'
import {Tarjeta} from '../components/cards'
import '../styles/Home.css'
import Footer from '../components/Footer'
import 'animate.css';

const Home = () => {
    return( 
        <>     
       <Slider />    
       <h1 className='text-home animate__animated animate__bounce animate__delay-2s'>Novedades</h1>
       <Tarjeta />   
       <Footer />
       </>  
    )
}
export default Home;