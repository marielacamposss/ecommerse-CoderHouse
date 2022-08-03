import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Contador from '../itemListContainer/contador/Contador';
import {useCartContext} from '../../context/CartContext';
import { useState } from 'react';
import {Link} from 'react-router-dom'

const ItemDetail= ({producto}) => {
  const [ isCount, setIsCount ] = useState(true)
   const { agregarCarrito, cartList } = useCartContext()
  
   const onAdd = (cant) => {
        console.log(`la cantidad es ${cant}`)
        agregarCarrito({ ...producto, cantidad: cant})
     setIsCount(false)
      }
      const BotonCarro=()=>{
        return (
          <Link to='/carro'>
          <button onClick={()=>console.log('holi')}>IR AL CARRO</button> 
          </Link>
        )
      }
      console.log(cartList)
       return (
       <div>
        <Container>
            <Row>
                <Col>
         <img src={`${producto.foto}`} alt="" width={200}/>
         </Col>
         <Col>
          <h1> {`Detalle de producto ${producto.name}`}</h1>
          <p>{`${producto.categoria}`}</p>

          <h3>{`$${producto.price}`}</h3>
           { isCount ?  <Contador initial={1} stock={15} onAdd={onAdd} /> : <BotonCarro />}

          </Col>
          </Row>
          </Container>
        </div>
       )
   }
   
   export default ItemDetail