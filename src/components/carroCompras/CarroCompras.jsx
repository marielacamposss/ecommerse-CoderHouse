import { useCartContext } from "../../context/CartContext"



const CarroCompras = () => {
  const { cartList, vaciarCarrito} = useCartContext()

    return (
      <div className='w-25'>
<ul>
  {cartList.map(item=>(
    <li key={item.id}>
      <img src={item.foto} alt="foto producto" width={50} />
      {item.name}- {item.cantidad} - Precio Unitario: {item.price} 
    </li>
  ))}
</ul>
<button onClick={vaciarCarrito}>Vaciar Carrito</button>
      </div>
      )
  }
  
  export default CarroCompras