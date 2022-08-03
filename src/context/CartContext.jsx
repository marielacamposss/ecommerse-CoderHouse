
import { createContext, useState, useContext } from "react";

const CartContext = createContext([])

export const useCartContext=()=>useContext(CartContext)

const CartContexProvider =({children})=> {
   const [cartList, setCartList] = useState([])
   
   const agregarCarrito = (prod)=>{
if (cartList.find(item => item.id === prod.id)){
    for (const item in cartList) {
        if (cartList[item].id === prod.id) {
            cartList[item].cantidad += prod.cantidad
        }
    }
} else {
    setCartList([
        ...cartList,
        prod
    ])
   }
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