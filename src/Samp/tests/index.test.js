/**
 * Testing our Samp component
 */
import React from 'react';
import { mount } from 'enzyme';
import BootstrapProvider from '@bootstrap-styled/provider/lib/BootstrapProvider';

import Samp from '../index';

const children = 'Test';

const renderComponent = (props = {}) => mount(
  <Samp>
    {props.children}
  </Samp>
);


const renderComponentUsingTheme = (props = {}) => mount(
  <BootstrapProvider>
    <Samp>
      {props.children}
    </Samp>
  </BootstrapProvider>
);


describe('<Samp />', () => {
  it('should render an <Samp> tag without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.find('samp').length).toBe(1);
  });
  it('should render a <abbr> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.find('samp').length).toBe(1);
  });
});
