import { useEffect, useState } from 'react'
import '../InputSearch/inputSearch.css'
import { search, searchVideo } from '../PeticionesFetch/Peticiones'
const InputSearch = ( {setImagenes, typeSelector, videos, setVideos} ) => {
    const [text, setText] = useState("")

   const handleSubmit = (event) => {
       event.preventDefault()
       search(text, setImagenes)
       formulario.reset()    
    }
    const handleSubmitVideo = (event) => {
        event.preventDefault()
        searchVideo(text, setVideos)
        formulario.reset()    
     }

   const handleChange = (event) => {
    setText(event.target.value)
   }

   return (
       <form name='formulario' onSubmit={ typeSelector === "v1" ? handleSubmit : handleSubmitVideo} className="form">
           <input onChange={handleChange} className="form__input" placeholder="Busca fotos gratuitas"></input>
       </form>
   )
}
export default InputSearch