import { useState , useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getFetch } from '../helpers/FechProd'
import ItemList from '../ItemList'
import Container from "react-bootstrap/esm/Container";
import { collection, getDocs, getFirestore, where, query } from 'firebase/firestore'
import Spinner from 'react-bootstrap/Spinner';

const ItemListContainer = ({ saludo }) => {

  const [ productos, setProductos] = useState ([])
  const [ loading, setLoading ] = useState(true)

  const { categoriaId } = useParams()
 
  const getProductsFirestore= (categoriaId)=>{
    const db = getFirestore()
    const queryCollection = collection(db, 'productos')
    const queryCollectionFilter =  categoriaId ? query 
     (queryCollection,
      where('categoria','==', categoriaId)) : queryCollection
    
    getDocs(queryCollectionFilter)
    .then(resp => setProductos( resp.docs.map(prod => ({ id: prod.id, ...prod.data() }) ) ) )
 .catch( err => console.log(err))
 .finally(()=> setLoading(false))
  }

  useEffect(()=>{
    getProductsFirestore(categoriaId)    
}, [categoriaId])


 const Loading = () => {
    return   <div className="m-4"><Spinner animation="border" variant="dark" /></div>
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
