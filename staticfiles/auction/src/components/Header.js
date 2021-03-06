'use strict';

import React from 'react';

require('styles//Header.css');

class Header extends React.Component {
  render() {
    return (
      <div id="header">
        <h1>VW - Fox 1.6 Prime GII Flex - 2011/2012 - Prata</h1>
        <h2>Início: 20/02/2016 às 10:00h - Lote: 00123</h2>
      </div>
    );
  }
}

Header.displayName = 'Header';

// Uncomment properties you need
// Header.propTypes = {};
// Header.defaultProps = {};

export default Header;
