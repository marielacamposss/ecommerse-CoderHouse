import { useState } from 'react'

const Contador = ({initial=1, stock=10, onAdd , handleInter}) => {
    const [count, setCount] = useState(1);

    const handleSuma = () => {
    if (count < stock) {
        setCount(count + 1)
    }
}
const handleResta = () => {
    if (count > 1) {
        setCount(count - 1)
    }
}
const handleAddToCart = () => {
   if (count < stock ) {
    onAdd(count)}
}

  return (
        <div>
        <label>
          { count }
    </label>
    <br />
    <button className='btn btn-primary m-2' onClick={handleSuma}>+</button>
    <button className='btn btn-primary m-2' onClick={handleResta}>-</button>
   <button onClick={handleInter}><button className='btn btn-secondary m-2' onClick={handleAddToCart}>Agregar carrito</button></button> 
    </div>
  )
}

export default Contador