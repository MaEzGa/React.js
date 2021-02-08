 import React from 'react';
 import './Add.css'

 export default function Add ( {onAdd, counter} ) {
     return(
         <div>
             <button className="col align-self-center" id="addCarrito" onClick = {onAdd (counter)}>Agregar al carrito</button>
         </div>
     )
 }
 