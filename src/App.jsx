import { useState } from 'react';
import NavBarEcommerse from './components/NavBar/NavBar';
import ItemListContainer from './components/NavBar/itemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/App.css';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <NavBarEcommerse />
        <ItemListContainer saludo='Hola soy item list container'/>

    </div>
  )
}

export default App
