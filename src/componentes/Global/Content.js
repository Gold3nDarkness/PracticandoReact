import React, { Component } from 'react';
import './css/Content.css';

class Content extends Component {
  render() {
    return (
      <div className="Content">
            <div id="Inicio">
            <h1>
              Aqui ves el inicio
            </h1>
            </div>
            <div id="Conocenos">
            <h1>
              Aqui nos conoces
            </h1>
            </div>
            <div id="Galery">
            <h1>
              Aqui ves las imagenes
            </h1>
            </div>
            <div id="Contactanos">
            <h1>
              Aqui nos contactas
            </h1>
            </div>
      </div>
      
    );
  }
}

export default Content;