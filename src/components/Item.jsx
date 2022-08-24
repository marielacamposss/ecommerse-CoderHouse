import React from 'react';
import {Link} from 'react-router-dom';
import Card from 'react-bootstrap/Card';

const item = ({ prod }) => {
    return (
         <div className='mb-4'>
            <Card style={{ width: '18rem'}}>
              <Card.Img className="CardImg" variant="top" src={`${prod.foto}`}/>
              <Card.Body className='tipography'>
                <Card.Title>{`${prod.name}`}</Card.Title>
                <Card.Text>
                $ {`${prod.price}`}
                </Card.Text>
                <Link to={`/detalle/${prod.id}`}>
                <button className='ButtonItem'>Ver detalle</button>
                </Link>
              </Card.Body>
            </Card>
              </div> 
              )
            }
              
export default item