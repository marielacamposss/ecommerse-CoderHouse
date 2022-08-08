import { useCartContext } from "../../context/CartContext"
import Table from 'react-bootstrap/Table';
import Container from "react-bootstrap/esm/Container";

const CarroCompras = () => {
  const { cartList, vaciarCarrito ,precioTotal, eliminarProducto} = useCartContext()

    return (
      <Container>
      <row className="w-75 justify-content-center">
         <Table striped>
      <thead>
        <tr>
          <th>#</th>
          <th>Producto</th>
          <th>Precio</th>
          <th>Cantidad</th>
          <th>Eliminar</th>
        </tr>
      </thead>
      <tbody>
      {cartList.map(item=>(
        <tr  key={item.id}>
          <td><img src={item.foto} alt="foto producto" width={50} /></td>
          <td>{item.name}</td>
          <td>{item.price}</td>
          <td>{item.cantidad}</td>
          <td><button onClick={() => eliminarProducto(item.id)}>X</button></td>
        </tr>
        ))}
      </tbody>
    </Table>

<h6> {precioTotal() != 0 && `Precio Total ${precioTotal()}`}</h6>
<button onClick={vaciarCarrito}>Vaciar Carrito</button>
      </row>
      </Container>
      )
  }
  
  export default CarroCompras