import React from 'react';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const item = ({ prod }) => {
    return (
         <div>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={`${prod.foto}`} />
              <Card.Body>
                <Card.Title>{`${prod.name}`}</Card.Title>
                <Card.Text>
                $ {`${prod.price}`}
                </Card.Text>
                <Link to={`/detalle/${prod.id}`}>
                <Button variant="success">Ver detalle</Button>
                </Link>
              </Card.Body>
            </Card>
              </div> 
              )
            }
              
export default item