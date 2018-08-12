import React, { Component } from 'react';
import './Header.css';
import logo from './logo.svg';
import perfil from './perfil.svg';
import sair from './sair.svg';

class Header extends Component {
  render() {
    return (
      <div className="header">
          <img src={logo} className="App-logo" alt="logo" />
          <img src={sair} className="Sair" alt="Sair"/>
          <img src={perfil} className="Perfil" alt="Perfil"/>
      </div>
    );
  }
}

export default Header;