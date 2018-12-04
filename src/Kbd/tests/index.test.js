/**
 * Testing our Kbd component
 */
import BootstrapProvider from '@bootstrap-styled/provider/lib/BootstrapProvider';

import { mount } from 'enzyme';
import React from 'react';


import Kbd from '../index';
const children = (<h1>Test</h1>);

const renderComponent = (props = {}) => mount(
  <Kbd
    className={props.className}
  >
    {props.children}
  </Kbd>
);


const renderComponentUsingTheme = (props = {}) => mount(
  <BootstrapProvider>
    <Kbd
      className={props.className}
    >
      {props.children}
    </Kbd>
  </BootstrapProvider>
);


describe('<Kbd />', () => {
  it('should render an <Kbd> tag without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.find('KbdUnstyled').length).toBe(1);
  });
  it('should have children without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render a <kbd> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.find('kbd').length).toBe(1);
    expect(renderedComponent.find('Kbd').length).toBe(1);
  });
  it('should have children with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
