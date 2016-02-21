'use strict';

import React from 'react';
import InfoItem from 'components/InfoItem';

require('styles//InfoItem.css');

class InfoItems extends React.Component {
  render() {
    return (
      <div id="info">
        <InfoItem itemId="principal" itemKey="Comitente" itemValue="Banco Bradesco S/A" />
        <InfoItem itemId="evaluation" itemKey="Avaliação" itemValue="R$ 12.100,00" />
        <InfoItem itemId="starting" itemKey="Lance inicial" itemValue="R$ 6.000,00" />
        <InfoItem itemId="increasing" itemKey="Incremento" itemValue="R$ 500,00" />
      </div>
    );
  }
}

InfoItems.displayName = 'InfoItems';

// Uncomment properties you need
// InfoItems.propTypes = {};
// InfoItems.defaultProps = {};

export default InfoItems;
