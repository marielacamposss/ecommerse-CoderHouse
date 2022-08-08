import React, { memo } from 'react';
import Item from './Item';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const ItemList = memo(
({ productos }) => {
    return (
        <Container className='m-2'>
        <Row>
        
       {
        productos?.map (prod => <Col><Item key={prod.id} prod={prod} /></Col>)
       }    
       
        </Row>
        </Container>
        )
      }
      )
              
export default ItemList