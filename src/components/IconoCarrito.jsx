import { useCartContext } from '../context/CartContext';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import IconoCarro from '../img/carrito.png'

const IconoCarrito = () => {
  const {cantidadTotal } = useCartContext()
  return (
    <div className="d-flex justify-content-around align-items-center">
        <p className='numberCart p-2'>{cantidadTotal() != 0 && `${cantidadTotal()}`}</p> 
        <img src={IconoCarro} className="IconCarrito"/>
    </div>
    )
}

export default IconoCarrito
