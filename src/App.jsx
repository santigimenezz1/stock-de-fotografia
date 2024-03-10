import { useState } from "react"
import NavBar from "./components/NavBar/NavBar"
import ModalImagen from "./components/ModalImagen/ModalImagen"
import Home from "./components/Home/Home"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Explorar from "./components/Explorar/Explorar"
import Layout from "./components/Layout/Layout"
import '../src/MediaQuery/MediaQuery.css'
import DetalleExplorar from "./components/Explorar/DetalleExplorar/DetalleExplorar"
import TarjetaImagen from "./components/TarjetaImagen/TarjetaImagen"


const Inicio =  () => {
       return (
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/explorar" element={<Explorar />}/>
          <Route path="/crear" element={<TarjetaImagen />}/>
          <Route path="/perfil" element={<Home />}/>
          <Route path="/explorar/:nombre" element={<DetalleExplorar />}/>
          <Route path="/detalle/:id" element={<h1>este es el detalle del fotografo</h1>} />
        </Routes>
        </BrowserRouter>
    )
}
export default Inicio