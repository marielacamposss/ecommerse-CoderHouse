
import { createContext, useState, useContext } from "react";

const CartContext = createContext([])

export const useCartContext=()=>useContext(CartContext)

const CartContexProvider =({children})=> {
   const [cartList, setCartList] = useState([])
   
   const agregarCarrito = (prod)=>{
    setCartList([
        ...cartList,
        prod
    ])
   }
   const vaciarCarrito = () =>{
    setCartList([])
   }
    return (
        <CartContext.Provider value={{
            cartList,
            agregarCarrito,
            vaciarCarrito
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContexProvider