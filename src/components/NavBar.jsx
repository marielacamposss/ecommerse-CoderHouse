import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Plantera</a>
    <div className="collapse navbar-collapse d-flex" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">inicio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Comprar</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Blog</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Contacto</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar