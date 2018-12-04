/**
 * Testing our Hr component
 */
import BootstrapProvider from '@bootstrap-styled/provider/lib/BootstrapProvider';

import { mount } from 'enzyme';
import React from 'react';

import Hr from '../index';

const renderComponent = (props = {}) => mount(
  <Hr
    className={props.className}
  />
);


const renderComponentUsingTheme = (props = {}) => mount(
  <BootstrapProvider>
    <Hr
      className={props.className}
    />
  </BootstrapProvider>
);


describe('<Hr />', () => {
  it('should render an <Hr> tag without a theme', () => {
    const renderedComponent = renderComponent({
    });
    expect(renderedComponent.find('hr').length).toBe(1);
  });
  it('should render a <hr> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
    });
    expect(renderedComponent.find('hr').length).toBe(1);
  });
});
