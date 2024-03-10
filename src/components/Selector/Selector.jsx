import { useState } from 'react'
import '../Selector/selector.css'
const Selector = ( {setTypeSelector} ) => {

    const handleChange = (event) => {
        return (
           setTypeSelector(event.target.value) 
        )
    }

    return (

        <div className="radio-inputs">
            <label className="radio">
                <input onClick={()=>setTypeSelector("v1")} type="radio" name="radio" />
                <span className="name">Imagenes</span>
            </label>

            <label className="radio">
                <input onClick={()=>setTypeSelector("videos")} type="radio" name="radio" />
                <span className="name">Videos</span>
            </label>
        </div>
    );
};

export default Selector;
