import { useState} from 'react'
import {Link} from 'react-router-dom'
import Contador from '../itemListContainer/contador/Contador'

const BotonCarro=()=>{
  return (
    <Link to='/carro'>
    <button onClick={()=>console.log('holi')}>IR AL CARRO</button> 
    </Link>
  )
}

const onAdd = (cant) => {
  console.log(`la cantidad es ${cant}`)
}

const Contador2=({handleInter})=>{
  return <button onClick={handleInter}><Contador initial={1} stock={15} onAdd={onAdd}/> </button>
  }

const Intercambio =() => {
 const [inputType, SetImputType] = useState('button')
   
 const handleInter=()=>{
  SetImputType('input')
 }

 return (
 <div>
  <h2>hola</h2>
  {
    inputType ==='button' ?
    <Contador2 handleInter={handleInter}></Contador2>
    :
    <BotonCarro />
  }
 </div>
 )
}

export default Intercambio