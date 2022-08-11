import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import './bootstrap.min.js'
import './style/bootstrap.min.css'
import { firebaseConnection } from './components/firebase/config'

firebaseConnection()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
