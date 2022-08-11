import { useCartContext } from "../../context/CartContext"
import Table from 'react-bootstrap/Table';
import Container from "react-bootstrap/esm/Container";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { addDoc, collection, documentId, getDoc, getDocs, getFirestore, query, where, writeBatch, updateDoc} from "firebase/firestore";

const CarroCompras = () => {
  const { cartList, vaciarCarrito ,precioTotal, eliminarProducto} = useCartContext()
  
  const guardarOrden = async (e) =>{
    e.preventDefault()

    const order = {}
    order.buyer = {email:'lalal@gmail.com', name:'mari', phone:'622837827'}
   
    order.items = cartList.map(prod => {
      return{
        product: prod.name,
        id: prod.id,
        price: prod.price
      }
    })

    order.total = precioTotal()
//guardar orden firestore
    const db = getFirestore()
    const queryOrders = collection(db, 'orders')
    addDoc(queryOrders, order)
    .then(resp => console.log(resp.id))

    //actualizar el stock
    const queryCollectionStock = collection(db, 'productos')

    const queryActualizarStock = query(
      queryCollectionStock,
      where (documentId() , 'in', cartList.map (it => it.id))
    )

    const batch = writeBatch(db)

    await getDocs(queryActualizarStock)
    .then(resp => resp.docs.forEach(res => batch.update(res.ref, {
      stock: res.data().stock - cartList.find(productos => productos.id === res.id).cantidad
    })))
    .catch(err => console.log(err))
    .finally(()=> console.log('listo'))

    batch.commit()
  }

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
      <row>
      <Form
       onSubmit={ guardarOrden }
       >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
      </row>
      </Container>
      )
  }
  
  export default CarroCompras