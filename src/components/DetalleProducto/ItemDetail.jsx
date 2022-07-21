import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ItemDetail= ({producto}) => {
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
          </Col>
          </Row>
          </Container>
        </div>
    
       
       )
   }
   
   export default ItemDetail