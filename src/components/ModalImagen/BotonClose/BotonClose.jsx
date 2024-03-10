import './botonClose.css'
const BotonClose = ( {handleClose} ) => {
   return (
       <button className="button" onClick={()=>handleClose()}>
 <span className="X"></span>
 <span className="Y"></span>
 <div className="close">Close</div>
</button>

   )
}

export default BotonClose