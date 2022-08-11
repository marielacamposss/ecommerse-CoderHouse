import { useState , useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getFetch } from '../helpers/FechProd'
import ItemList from '../ItemList'
import Container from "react-bootstrap/esm/Container";
import { collection, getDocs, getFirestore, where, query } from 'firebase/firestore'
const ItemListContainer = ({ saludo }) => {

  const [ productos, setProductos] = useState ([])
  const [ loading, setLoading ] = useState(true)

  const { categoriaId } = useParams()
 
  useEffect(()=>{
    const db = getFirestore()
    const queryCollection = collection(db, 'productos')
    const queryFiltrada = query (
      queryCollection,
      where('categoria','==','plantas')
    )
    getDocs(queryFiltrada)
    .then(resp => setProductos( resp.docs.map(prod => ({ id: prod.id, ...prod.data()}))))
 .catch( err => console.log(err))
 .finally(()=> setLoading(false))
  }, [])

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
