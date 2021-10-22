//IMPORTAR MODULO
import React from 'react';

//class

export default class Topo extends React.Component{
  render(){
    return(

      <nav className="navbar navbar-b navbar-trans navbar-expand-md fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">CRIPSTONKS</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Criptomoedas
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="#" class="smoothscroll">Bitcoin</a></li>
                <li><a className="dropdown-item" href="#" class="smoothscroll">Litecoin</a></li>
                <li><a className="dropdown-item" href="#" class="smoothscroll">Ripple XRP</a></li>
                <li><a className="dropdown-item" href="#" class="smoothscroll">Ethereum</a></li>
                <li><a className="dropdown-item" href="#" class="smoothscroll">Chiliz</a></li>
                <li><a className="dropdown-item" href="#" class="smoothscroll">Tether</a></li>
                <li><hr className="dropdown-divider"/></li>
                <li><a className="dropdown-item" href="#" class="smoothscroll">Onde comprar criptomoedas</a></li>
              </ul>
            </li>

          </ul>

        </div>
      </div>
    </nav>
     
    )
  }
}


