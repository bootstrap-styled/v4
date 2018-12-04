/**
 * Testing our Footer component
 */
import BootstrapProvider from '@bootstrap-styled/provider/lib/BootstrapProvider';

import { mount } from 'enzyme';
import React from 'react';


import Footer from '../index';

const children = (<h1>Test</h1>);

const renderComponent = (props = {}) => mount(
  <Footer
    className={props.className}
  >
    {props.children}
  </Footer>
);


const renderComponentUsingTheme = (props = {}) => mount(
  <BootstrapProvider>
    <Footer
      className={props.className}
    >
      {props.children}
    </Footer>
  </BootstrapProvider>
);


describe('<Footer />', () => {
  it('should render an <Footer> tag without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.find('footer').length).toBe(1);
  });
  it('should have children without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render a <footer> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.find('footer').length).toBe(1);
  });
  it('should have children with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
