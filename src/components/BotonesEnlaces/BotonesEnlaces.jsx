import { useState } from "react"
import BotonNavBar from "../BotonNavBar/BotonNavBar"
import { Link } from "react-router-dom"

const BotonesEnlaces = () => {
    const [botonActive, setBotonActive] = useState("Inicio")

    return (
        <div style={{display:"flex", gap:"15px"}}>
        <Link to={'/'}>
            <BotonNavBar  text={"Inicio"} botonActive={botonActive}  setBotonActive={setBotonActive}/> 
            </Link>
            <Link to={'/explorar'}>
            <BotonNavBar text={"Explorar"} botonActive={botonActive} setBotonActive={setBotonActive} /> 
            </Link >
            <Link to={'/crear'}>
            <BotonNavBar text={"Crear"} botonActive={botonActive} setBotonActive={setBotonActive}  /> 
            </Link>
        </div>
    )
}
export default BotonesEnlaces