import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Counter from '../itemListContainer/contador/Counter';
import {useCartContext} from '../../context/CartContext';
import { useState } from 'react';
import {Link} from 'react-router-dom'
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Card from 'react-bootstrap/Card';

const ItemDetail= ({producto}) => {
  const [ isCount, setIsCount ] = useState(true)
   const { addCart, cartList } = useCartContext()
  
   const onAdd = (cant) => {
        console.log(`la cantidad es ${cant}`)
        addCart({ ...producto, cantidad: cant})
     setIsCount(false)
      }
      const ButtonCart=()=>{
        return (
          <Link to='/carro'>
          <button className='ButtonItem' onClick={()=>console.log('holi')}>IR AL CARRO</button> 
          </Link>
        )
      }
      console.log(cartList)
       return (
       <div>
        <Container className="m-4 ">
          <Row >  
          <Col >
          <div className="d-flex m-4">
           <Breadcrumb>
              <Breadcrumb.Item className="breadcrumbStyleText " href="/">Inicio</Breadcrumb.Item>
              <Breadcrumb.Item className="breadcrumbStyleText" href={`/categoria/${producto.categoria}`}>
              {`${producto.categoria}`}
              </Breadcrumb.Item>
              <Breadcrumb.Item className="breadcrumbStyleText" active>{`${producto.name}`}</Breadcrumb.Item>
           </Breadcrumb>
           </div>
           </Col>
          </Row>
          <Row className='boxDetail d-flex justify-content-around'>
           <Col className='m-2'>
             <img src={`${producto.foto}`} alt="" className='DetailImg'/>
           </Col>
         <Col className='m-2'>
          <h1> {`${producto.name}`}</h1>
         {producto.stock >= 1 ? <p className='Stock'>STOCK: {`${producto.stock}`}</p> 
         : 
         <p className='NoStock'>SIN STOCK</p> 
         }
        
          <p className='DescriptionStile'>{`${producto.Description}`}</p>

          <h3>{`$${producto.price}`}</h3>
           { isCount ?  <Counter initial={1} stock={15} onAdd={onAdd} /> : <ButtonCart />}
          </Col>
          </Row>
          </Container>
        </div>
       )
   }
   
   export default ItemDetail