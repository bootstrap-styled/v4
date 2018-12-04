/**
 * Testing our Legend component
 */
import BootstrapProvider from '@bootstrap-styled/provider/lib/BootstrapProvider';

import { mount } from 'enzyme';
import React from 'react';


import Legend from '../index';

const children = (<h1>Test</h1>);

const renderComponent = (props = {}) => mount(
  <Legend
    className={props.className}
  >
    {props.children}
  </Legend>
);


const renderComponentUsingTheme = (props = {}) => mount(
  <BootstrapProvider>
    <Legend
      className={props.className}
    >
      {props.children}
    </Legend>
  </BootstrapProvider>
);


describe('<Legend />', () => {
  it('should render a <Legend> tag without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.find('legend').length).toBe(1);
  });
  it('should have children without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render a <legend> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.find('legend').length).toBe(1);
  });
  it('should have children with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
