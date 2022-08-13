import { useCartContext } from "../../context/CartContext"
import Table from 'react-bootstrap/Table';
import Container from "react-bootstrap/esm/Container";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react'
import { addDoc, collection, documentId, getDoc, getDocs, getFirestore, query, where, writeBatch, updateDoc} from "firebase/firestore";

const CarroCompras = () => {
  const [ id, setId ] = useState('')
 const [ formData, setFormData ] = useState({
  email:'', 
  name:'', 
  phone:''
      })
 const [ data, setData ] = useState(true)
  const { cartList, vaciarCarrito ,precioTotal, eliminarProducto} = useCartContext()

  const guardarOrden = async (e) =>{
    e.preventDefault()
  if(formData.email === '' || formData.phone ==='' || formData.name === '') 
    { alert("todos los campos son obligatorios") }else{
   
    const order = {}
    order.buyer = formData
    
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
    .then(resp => setId(resp.id))
 
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
    .finally(()=> vaciarCarrito(), 
    setData(false)
    )

    batch.commit()
  }
  }

  const handleChange = (e) =>{
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }
  
  console.log(formData)

    return (
      <Container>
         {data ? 
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
    
    
      <Form
       onSubmit={ guardarOrden }
       >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
         <Form.Control  onChange={handleChange} type="email" name="email" value={formData.email} placeholder="Enter email" />

      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Telefono</Form.Label>
        <Form.Control onChange={handleChange} type="phone" name="phone" value={formData.phone} placeholder="Password" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Nombre Completo</Form.Label>
        <Form.Control onChange={handleChange} type="name" name="name" value={formData.name}  placeholder="Password" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
      </row>
      :
       <row className="w-75 justify-content-center">  
       <h2>{id.length > 0 && `El id de tu orden es: ${id}`}</h2> 
       <br />
       <p>DATOS DE COMPRADOR:</p>
       <h6>{formData != '' && `Nombre : ${formData.name} `}</h6>
       <h6>{formData != '' && `Correo : ${formData.email} `}</h6>
       <h6>{formData != '' && `Telefono : ${formData.phone}`}</h6>
       </row>
}
      </Container>
      )
  }
  
  export default CarroCompras