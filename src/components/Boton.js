import '../styles/Boton.css'

function Boton( texto ){
    return (
        <button className='btn btn-outline-light'
                 >
            {texto}
        </button>
    )
}

export default Boton;