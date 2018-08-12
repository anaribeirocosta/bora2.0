import React, { Component } from 'react';
import './Controlador.css';
import Botao from '../botao/Botao.js' ;


class Controlador extends Component {
  constructor(props){
    super(props);
    this.state ={

    }
  }
  render() {
    return (
        <div className="controlador">
            {this.props.links.map((texto, posicao) => <p key={posicao}> {texto} </p>)}
            <Botao className='botao' />
        </div>
     
    );
  }
}

export default Controlador;