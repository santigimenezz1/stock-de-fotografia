import { useEffect, useState } from "react"
import ModalImagen from "../ModalImagen/ModalImagen"
import NavBar from "../NavBar/NavBar"
import Main from "./Main/Main"
import { search, searchFotografo, searchVideo } from "../PeticionesFetch/Peticiones"
import Selector from "../Selector/Selector"
import '../Home/home.css'
import BotonesEnlacesMobile from "../BotonesEnlacesMobile/BotonesEnlacesMobile"

const Home = () => {
    const[imagenes, setImagenes] = useState([])
    const [typeSelector, setTypeSelector] = useState("v1")
    const [videos, setVideos] = useState([]) 
    const [fotografo, setFotografo] = useState()

    useEffect(()=>{
        search( "gatos", setImagenes)
    },[])

    useEffect(()=>{
        searchVideo( "cats", setVideos)
    },[])

    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
      const handleScroll = () => {
        setScrollY(window.scrollY);
      };
      // Llamar a handleScroll directamente al montar el componente para obtener el valor inicial
      handleScroll();
  
      // Agregar el evento de scroll al objeto document
      document.addEventListener("scroll", handleScroll);
    }, []); 
  
    return (
        <>
        <NavBar setImagenes={setImagenes} typeSelector={typeSelector} videos={videos} setVideos={setVideos} />
        <div className="container__selector">
            <Selector setTypeSelector={setTypeSelector} />
        </div>
        
        <Main imagenes={imagenes} typeSelector={typeSelector} videos={videos}/>
    </>
    )
}
export default Home 