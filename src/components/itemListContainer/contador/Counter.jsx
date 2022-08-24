import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const Counter = ({initial=1, stock=10, onAdd , handleInter}) => {
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
        <label className='m-2'>
          { count }
    </label>
    <ButtonGroup className="me-2" aria-label="First group">
        <Button className="ButtonCounter" onClick={handleSuma}>+</Button> 
        <Button className="ButtonCounter" onClick={handleResta}>-</Button> 
   </ButtonGroup>
   <br/>
  <button className='ButtonItem m-2' onClick={handleAddToCart}>Agregar carrito</button>
    </div>
  )
}

export default Counter
