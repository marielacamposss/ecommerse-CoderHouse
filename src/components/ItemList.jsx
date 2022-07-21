import React from 'react';
import Item from './Item';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const ItemList = ({ productos }) => {
    return (
        <Container>
        <Row>
        
       {
        productos?.map (prod => <Col><Item key={prod.id} prod={prod} /></Col>)
       }    
       
        </Row>
        </Container>
        )
      }
              
export default ItemList