import React, { Component } from 'react';
import './Body.css';
import Controlador from '../settingButtons/Controlador.js';

class Body extends Component {
    render() {
        return (
        <div className="body">
                <div className="calendario"></div>
                <button className="add"> + </button>
        <Controlador className="Control" />
        <Controlador className="Control" />
        <Controlador className="Control" />   
        </div>
        );
    }
}

export default Body;
