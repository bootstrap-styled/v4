/**
 * Testing our Header component
 */
import BootstrapProvider from '@bootstrap-styled/provider/lib/BootstrapProvider';

import { mount } from 'enzyme';
import React from 'react';


import Header from '../index';

const children = (<h1>Test</h1>);

const renderComponent = (props = {}) => mount(
  <Header
    className={props.className}
  >
    {props.children}
  </Header>
);


const renderComponentUsingTheme = (props = {}) => mount(
  <BootstrapProvider>
    <Header
      className={props.className}
    >
      {props.children}
    </Header>
  </BootstrapProvider>
);


describe('<Header />', () => {
  it('should render an <Header> tag without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.find('header').length).toBe(1);
  });
  it('should have children without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render a <header> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.find('header').length).toBe(1);
  });
  it('should have children with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
