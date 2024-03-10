import '../BotonNavBar/botonNavBar.css'
const BotonNavBar = ( {text, botonActive, setBotonActive} ) => {

    return (
        <button onClick={()=>setBotonActive(text)} className={botonActive === text ? "active" : "botonNavBar"}>{text}</button>
    )
}
export default BotonNavBar