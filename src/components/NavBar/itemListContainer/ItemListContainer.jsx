import Contador from './contador/Contador'

const ItemListContainer = ({ saludo }) => {
  const onAdd = (cant) => {
    console.log(`la cantidad es ${cant}`)
  }
  return (
    <div>{saludo}
            <Contador initial={1} stock={15} onAdd={onAdd}/>

    </div>

  )
}

export default ItemListContainer
