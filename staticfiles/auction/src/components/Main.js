require('normalize.css');
require('styles/App.css');

import React from 'react';
import Header from 'components/Header';
import InfoItems from 'components/InfoItems';

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
                <label htmlFor="user">Usuário</label>
                <strong id="user">Platéia</strong>
                <br />
                <label htmlFor="city">Cidade</label>
                <strong id="city">Fortaleza</strong>
                <br />
                <label htmlFor="send">Enviado às</label>
                <strong id="send">11:17:33</strong>
              </div>
            </div>
          </div>
          <div id="aside">
            <InfoItems />
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
