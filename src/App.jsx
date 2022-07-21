import { useState } from 'react';
import {BrowserRouter , Routes , Route, Navigate} from 'react-router-dom';
import NavBarEcommerse from './components/NavBar';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import CarroCompras from './components/carroCompras/CarroCompras';
import ItemDetailContainer from './components/DetalleProducto/ItemDetailContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/App.css';


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <div className="App">
        <NavBarEcommerse />
        <Routes>
          <Route path='/' element={<ItemListContainer />}/>
          <Route path='/categoria/:categoriaId' element={<ItemListContainer />}/>
          <Route path='/carro' element={<CarroCompras/>}/>
          <Route path='/detalle/:detalleId' element={<ItemDetailContainer/>}/>
          <Route path='*' element={<Navigate to='/'/>}/>
        </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
