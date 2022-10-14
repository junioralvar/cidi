import '../styles/Error.css'
import error from '../imagenes/error.png'
import Footer from '../components/Footer.js'
const Error404 = () => {
    return (
        <>                       
         <center>
            <img
         className='img-error'
          src={error}
          alt='error' />
          </center> 


          <Footer />
        </>


    )
}
export default Error404;