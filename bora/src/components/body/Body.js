import React, { Component } from 'react';
import './Body.css';
import Controlador from '../settingButtons/Controlador.js';
import Calendar from '../googleCalendar/GoogleCalendar';


class Body extends Component {
    render() {
        return (
        <div className="body">
            <div className="eventos">
                <div className="calendario">
               <Calendar/>
                </div>
                <div className="addEvento">
                    <button className="add"> + </button>
                    <h1> Adicionar Evento </h1>
                </div>
            </div>    
            <div className= "controladores">        
                <Controlador links={["Você está na pista"]} className="Control" />
                <Controlador links={["Seus amigos estão na Pista"]} className="Control" />
                <Controlador links={["Eventos"]} className="Control" />
            </div>   
        </div>
        );
    }
}

export default Body;
