/**
 * Testing our FigCaption component
 */
import React from 'react';
import BootstrapProvider from '@bootstrap-styled/provider/lib/BootstrapProvider';
import { mount } from 'enzyme';

import FigCaption from '../FigCaption';

const children = 'Test';

const renderComponent = (props = {}) => mount(
  <FigCaption {...props}>
    {children}
  </FigCaption>
);


const renderComponentUsingTheme = (props = {}) => mount(
  <BootstrapProvider>
    <FigCaption {...props}>
      {children}
    </FigCaption>
  </BootstrapProvider>
);


describe('<FigCaption />', () => {
  it('should render an <FigCaption> tag without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.find('FigCaptionUnstyled').length).toBe(1);
  });
  it('should contain children without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render a <figcaption> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.find('figcaption').length).toBe(1);
    expect(renderedComponent.find('FigCaption').length).toBe(1);
  });
  it('should render a <figcaption> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
      right: true,
    });
    expect(renderedComponent.find('FigCaption').props().right).toBe(true);
  });
});
