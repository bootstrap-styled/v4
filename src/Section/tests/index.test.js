/**
 * Testing our Section component
 */

import { mount } from 'enzyme';
import React from 'react';
import BootstrapProvider from '@bootstrap-styled/provider/lib/BootstrapProvider';

import Section from '../index';

const children = (<h1>Test</h1>);

const renderComponent = (props = {}) => mount(
  <Section
    className={props.className}
  >
    {props.children}
  </Section>
);


const renderComponentUsingTheme = (props = {}) => mount(
  <BootstrapProvider>
    <Section
      className={props.className}
    >
      {props.children}
    </Section>
  </BootstrapProvider>
);


describe('<Section />', () => {
  it('should render an <Section> tag without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.find('section').length).toBe(1);
  });
  it('should have children without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render a <section> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.find('section').length).toBe(1);
  });
  it('should have children with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
