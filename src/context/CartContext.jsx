
import { createContext, useState, useContext } from "react";

const CartContext = createContext([])

export const useCartContext=()=>useContext(CartContext)

const CartContexProvider =({children})=> {
   const [cartList, setCartList] = useState([])
   
   const agregarCarrito = (prod)=>{
   const idx = cartList.findIndex(producto => producto.id === prod.id)
    if (idx != -1){
    let cant = cartList[idx].cantidad
    cartList[idx].cantidad = cant + prod.cantidad
     
    setCartList( [...cartList] )
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

const precioTotal = ()=>{
    return cartList.reduce((acumPrecio, prodObj) => acumPrecio = acumPrecio + (prodObj.price * prodObj.cantidad), 0)
}

const cantidadTotal = ()=>{
    return cartList.reduce((contador, produObject) => contador += produObject.cantidad ,0)
}

const eliminarProducto = (id) => {
    setCartList( cartList.filter(prod => prod.id != id))
}
    return (
        <CartContext.Provider value={{
            cartList,
            agregarCarrito,
            vaciarCarrito,
            precioTotal,
            cantidadTotal,
            eliminarProducto
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContexProvider