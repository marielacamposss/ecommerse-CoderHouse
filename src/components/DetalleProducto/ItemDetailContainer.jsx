import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { getFetch } from '../helpers/FechProd'
import ItemDetail from './ItemDetail'


const ItemDetailContainer= (productos) => {
   
   const {detalleId} = useParams()
   const [producto, setProducto] = useState ([])

   if(detalleId){
     getFetch()
     .then(seleccionado => setProducto(seleccionado.find(producto => producto.id == detalleId)))
    }
    return (
      <div>
        <ItemDetail producto={producto}/>
       </div>
      )
  }
  
  export default ItemDetailContainer