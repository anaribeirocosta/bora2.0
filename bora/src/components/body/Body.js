import React, { Component } from 'react';
import './Body.css';
import Controlador from '../settingButtons/Controlador.js';

class Body extends Component {
    render() {
        return (
        <div className="body">
            <div className="eventos">
                <div className="calendario"></div>
                <div className="addEvento">
                    <button className="add"> + </button>
                    <h1> Adicionar Evento </h1>
                </div>
            </div>    
            <div className= "controladores">        
                <Controlador className="Control" />
                <Controlador className="Control" />
                <Controlador className="Control" />
            </div>   
        </div>
        );
    }
}

export default Body;
