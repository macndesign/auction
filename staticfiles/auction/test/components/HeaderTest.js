/*eslint-env node, mocha */
/*global expect */
/*eslint no-console: 0*/
'use strict';

// Uncomment the following lines to use the react test utilities
// import TestUtils from 'react-addons-test-utils';
import createComponent from 'helpers/shallowRenderHelper';
import Header from 'components/Header';

describe('HeaderComponent', () => {
  let component;

  beforeEach(() => {
    component = createComponent(Header);
  });

  it('should have its component name as default id header', () => {
    expect(component.props.id).to.equal('header');
  });
});
