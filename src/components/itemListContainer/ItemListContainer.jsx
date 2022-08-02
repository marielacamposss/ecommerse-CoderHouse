import { useState , useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getFetch } from '../helpers/FechProd'
import ItemList from '../ItemList'
import Contador from './contador/Contador'

const ItemListContainer = ({ saludo }) => {

  const [ productos, setProductos] = useState ([])
  const [ loading, setLoading ] = useState(true)

  const { categoriaId } = useParams()

  useEffect(()=>{
    if (categoriaId){
      getFetch()
      .then(respuesta => setProductos(respuesta.filter(prod => prod.categoria == categoriaId)))
      .catch( err => console.log(err))
      .finally(()=> setLoading(false))
     
    } else {
     getFetch()//mock de una consulta a una api
    .then(respuesta => setProductos(respuesta))
    .catch( err => console.log(err))
    .finally(()=> setLoading(false))
      }
    }, [categoriaId])

   const onAdd = (cant) => {
    console.log(`la cantidad es ${cant}`)
  }

  console.log(categoriaId)

  return (
    <div>
            {loading ? 
            <h1>Cargando...</h1>
            :
               <ItemList productos={productos}/>
                   }
              <Contador initial={1} stock={15} onAdd={onAdd}/>
               </div>
  )
}

export default ItemListContainer