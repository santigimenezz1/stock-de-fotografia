 import { Navigate, useNavigate } from 'react-router-dom'
import '../BotonBack/botonBack.css'

const BotonBack = () => {
    const volver = useNavigate()
    const handleGoBack = () => {
        volver(-1);
      };


    return (
        <button className='detalle__botonVolver' onClick={()=>handleGoBack()}>Volver</button>
    )
}
export default BotonBack