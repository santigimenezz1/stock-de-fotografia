 import { useState } from 'react';
import BotonNavBar from '../BotonNavBar/BotonNavBar'
import BotonesEnlaces from '../BotonesEnlaces/BotonesEnlaces'
import '../BotonesEnlacesMobile/botonesEnlacesMobile.css'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Link } from 'react-router-dom';

const BotonesEnlacesMobile = () => {
    const [estadoOn, setEstadoOn] = useState(false)
    const [texto, setTexto] = useState("Inicio")
    return (
        <div class="paste-button">
  <button className='paste-button_button'>{texto} ▼</button>
  <div className="dropdown-content">
    <Link to={'/'}>
    <a className='text' onClick={()=>setTexto("Inicio")} id="top" href="#">Inicio</a>
    </Link>
    <Link to={'/explorar'}>
    <a className='text' onClick={()=>setTexto("Explorar")} id="middle" href="#">Explorar</a>
    </Link>
    <Link to={'/crear'}>
    <a className='text' onClick={()=>setTexto("Crear")} id="bottom" href="#">Crear</a>
    </Link>
  </div>
  </div>     
    )
}
export default BotonesEnlacesMobile
