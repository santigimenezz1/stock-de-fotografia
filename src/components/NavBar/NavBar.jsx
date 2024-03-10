import { useState } from 'react'
import BotonNavBar from '../BotonNavBar/BotonNavBar'
import InputSearch from '../InputSearch/InputSearch'
import './navBar.css'
import BotonesEnlaces from '../BotonesEnlaces/BotonesEnlaces'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link, Outlet } from 'react-router-dom'
import Selector from '../Selector/Selector'
import BotonesEnlacesMobile from '../BotonesEnlacesMobile/BotonesEnlacesMobile'
const NavBar = ( {setImagenes, handleDatosCargados, typeSelector, videos, setVideos} ) => {
    return (
        <>
        <nav className='nav'>
            <div className='nav__image'>
                <Link to={'/'}>
            <img src='https://res.cloudinary.com/dcf9eqqgt/image/upload/v1705007307/pixel_studio_ocmvav.png'></img>
                </Link>
                <BotonesEnlaces />
                <div style={{display:"none"}}>
            <BotonesEnlacesMobile />
                </div>
            </div>
            <div className='nav__input'>
            <InputSearch setImagenes={setImagenes}  typeSelector={typeSelector} videos={videos} setVideos={setVideos} />
            </div>
            <Link to={'/perfil'}>
            <AccountCircleIcon fontSize='large' style={{cursor:"pointer"}} />
            </Link>
        </nav>
        <Outlet />

        </>
        
        
       
    )
}
export default NavBar