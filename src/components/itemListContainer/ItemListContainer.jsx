import { useState , useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getFetch } from '../helpers/FechProd'
import ItemList from '../ItemList'
import Container from "react-bootstrap/esm/Container";

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

 const Loading = () => {
  
  return  <h1>Cargando...</h1>
 }

  return (
    <Container>
    <row className="w-75 justify-content-center">
              {loading ? 
            < Loading />
            :
               <ItemList productos={productos}/>
                   }
    </row>
    </Container>
  )
}

export default ItemListContainer
