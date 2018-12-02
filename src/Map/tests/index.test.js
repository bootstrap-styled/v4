/**
 * Testing our Map component
 */

import BootstrapProvider from '@bootstrap-styled/provider/lib/BootstrapProvider';

import { mount } from 'enzyme';
import React from 'react';


import Map from '../index';
const children = (<h1>Test</h1>);

const renderComponent = (props = {}) => mount(
  <Map
    className={props.className}
  >
    {props.children}
  </Map>
);


const renderComponentUsingTheme = (props = {}) => mount(
  <BootstrapProvider>
    <Map
      className={props.className}
    >
      {props.children}
    </Map>
  </BootstrapProvider>
);


describe('<Map />', () => {
  it('should render an <Map> tag without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.find('map').length).toBe(1);
  });
  it('should have children without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render a <map> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.find('map').length).toBe(1);
  });
  it('should have children with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
