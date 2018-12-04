/**
 * Testing our Pre component
 */
import { mount } from 'enzyme';
import React from 'react';
import BootstrapProvider from '@bootstrap-styled/provider/lib/BootstrapProvider';

import Pre from '../index';

const children = (<h1>Test</h1>);

const renderComponent = (props = {}) => mount(
  <Pre
    className={props.className}
  >
    {props.children}
  </Pre>
);


const renderComponentUsingTheme = (props = {}) => mount(
  <BootstrapProvider>
    <Pre
      className={props.className}
    >
      {props.children}
    </Pre>
  </BootstrapProvider>
);


describe('<Pre />', () => {
  it('should render an <Pre> tag without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.find('pre').length).toBe(1);
  });
  it('should have children without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render a <pre> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.find('pre').length).toBe(1);
  });
  it('should have children with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
