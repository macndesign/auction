require('normalize.css');
require('styles/App.css');

import React from 'react';
import Header from 'components/HeaderComponent';

let foxImage = require('../images/fox.jpg');

class AppComponent extends React.Component {
  render() {
    return (
      <div id="wrapper">
        <Header />
        <div id="container">
          <div id="main">
            <div id="photo">
              <img src={foxImage} alt="VW Fox" />
            </div>
            <div id="section">
              <div id="bid">
                <h3>
                  Lance atual<br />
                  <small>R$</small>
                  <strong>14.500,00</strong>
                </h3>
                <h4>João Constantino</h4>
              </div>
              <div id="bid-more">
                <h4>Total de 17 lances</h4>
                <label for="user">Usuário</label>
                <strong id="user">Platéia</strong>
                <br />
                <label for="city">Cidade</label>
                <strong id="city">Fortaleza</strong>
                <br />
                <label for="send">Enviado às</label>
                <strong id="send">11:17:33</strong>
              </div>
            </div>
          </div>
          <div id="aside">
            <div id="info">
              <label for="principal">Comitente</label>
              <strong id="principal">Banco Bradesco S/A</strong>
              <hr />
              <label for="evaluation">Avaliação</label>
              <strong id="evaluation">R$ 12.100,00</strong>
              <hr />
              <label for="starting">Lance inicial</label>
              <strong id="starting">R$ 6.000,00</strong>
              <hr />
              <label for="increasing">Incremento</label>
              <strong id="increasing">R$ 500,00</strong>
              <hr />
            </div>
            <div id="control">
              <h4><em>Contagem regressiva</em></h4>
              <div id="clock">00:42</div>
              <button>Ofertar lance!</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
