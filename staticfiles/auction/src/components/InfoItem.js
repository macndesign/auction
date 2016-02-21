'use strict';

import React from 'react';

require('styles//InfoItem.css');

class InfoItem extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor={this.props.itemId}>{this.props.itemKey}</label>
        <strong id={this.props.itemId}>{this.props.itemValue}</strong>
        <hr />
      </div>
    );
  }
}

InfoItem.displayName = 'InfoItem';

// Uncomment properties you need
// InfoItem.propTypes = {};
// InfoItem.defaultProps = {};

export default InfoItem;
