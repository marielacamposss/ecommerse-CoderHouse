import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import Spinner from 'react-bootstrap/Spinner';

const ItemDetailContainer= () => {
   
   const [producto, setProducto] = useState({})
   const {detalleId} = useParams()

   useEffect(()=>{
    const db = getFirestore()
    const queryProducto = doc(db, 'productos', detalleId)
    getDoc(queryProducto)
    .then(resp => setProducto ({ id: resp.id, ...resp.data()}))
    .catch( err => console.log(err))
   },[detalleId])
  
   const Loading = () => {
  
    return   <div className="m-4"><Spinner animation="border" variant="dark" /> </div> 
   }

    return (
      <div>
        
        {
        producto.id ?
        <ItemDetail producto={producto}/>
        :
        Loading
       }
       </div>
      )
  }
  
   
  export default ItemDetailContainer