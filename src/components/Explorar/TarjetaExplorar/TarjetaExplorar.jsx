 import { Link } from 'react-router-dom'
import '../TarjetaExplorar/tarjetaExplorar.css'
const TarjetaExplorar = ( {coleccion, text} ) => {

  console.log(coleccion)

    return (
        <>
       {
        coleccion.length > 0 && 
        <Link className='link' to={`/explorar/${text}`}>
        <div className="tarjetaExplorar">
            <h1 className='titulo__length'>+ {coleccion.length}</h1>
            <div className='tarjetaExplorar__principal'>
            <img src={coleccion[0].src.portrait}></img>
            </div>
            <div className='tarjetaExplorar__secundarias'>
                <img className='imagenes__secundarias__izquierda' src={coleccion[1].src.portrait}></img>
                <img className='imagenes__secundarias__derecha' src={coleccion[3].src.portrait}></img>
                <img className='imagenes__secundarias__sinBorde' src={coleccion[2].src.portrait}></img>
            </div>
            <h1 className='tarjetaExplorar__texto'>{text}</h1>
        </div>
        </Link>
       }
        </>
    )
}
export default TarjetaExplorar