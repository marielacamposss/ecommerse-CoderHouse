import { resolvePath } from "react-router-dom"

let productos = [
  { id: '1', categoria: 'plantas', name: 'Cordatum', price: '5000', foto: 'https://thumbs.dreamstime.com/b/planta-con-las-hojas-del-verde-y-el-pu%C3%B1ado-de-tierra-22868137.jpg' },
  { id: '2', categoria: 'plantas', name: 'Sanseviera', price: '8000', foto: 'https://thumbs.dreamstime.com/b/planta-con-las-hojas-del-verde-y-el-pu%C3%B1ado-de-tierra-22868137.jpg' },
  { id: '3', categoria: 'maceteros', name: 'Longifolio', price: '10000', foto: 'https://thumbs.dreamstime.com/b/planta-con-las-hojas-del-verde-y-el-pu%C3%B1ado-de-tierra-22868137.jpg' },
  { id: '4', categoria: 'maceteros', name: 'Singonio', price: '3000', foto: 'https://thumbs.dreamstime.com/b/planta-con-las-hojas-del-verde-y-el-pu%C3%B1ado-de-tierra-22868137.jpg' }
]
export const getFetch = (id) => {

  return new Promise((resuelta, rechazada) => {

    setTimeout(() => {
      if (id) {
        resuelta(productos.find(producto => producto.id == id))
      } else {
        resuelta(productos)
      }
    }, 1000)
  })
}




