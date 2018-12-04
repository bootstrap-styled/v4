/**
 * Testing our Mark component
 */

import BootstrapProvider from '@bootstrap-styled/provider/lib/BootstrapProvider';

import { mount } from 'enzyme';
import React from 'react';

import Mark from '../index';

const children = (<h1>Test</h1>);

const renderComponent = (props = {}) => mount(
  <Mark
    className={props.className}
  >
    {props.children}
  </Mark>
);


const renderComponentUsingTheme = (props = {}) => mount(
  <BootstrapProvider>
    <Mark
      className={props.className}
    >
      {props.children}
    </Mark>
  </BootstrapProvider>
);


describe('<Mark />', () => {
  it('should render an <Mark> tag without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.find('mark').length).toBe(1);
  });
  it('should have children without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render a <mark> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.find('mark').length).toBe(1);
  });
  it('should have children with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
