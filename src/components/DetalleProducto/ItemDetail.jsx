import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Intercambio from './Intercambio';
import Contador from '../itemListContainer/contador/Contador';
import {useCartContext} from '../../context/CartContext';

const ItemDetail= ({producto}) => {
   const { agregarCarrito, cartList } = useCartContext()
  
   const onAdd = (cant) => {
        console.log(`la cantidad es ${cant}`)
        agregarCarrito({ ...producto, cantidad: cant})
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
           <Contador initial={1} stock={15} onAdd={onAdd}/>
          </Col>
          </Row>
          </Container>
        </div>
       )
   }
   
   export default ItemDetail