import React from 'react';
import { mount } from 'enzyme';
import BootstrapProvider from '@bootstrap-styled/provider/lib/BootstrapProvider';

import Sub from '../index';

const children = 'Test';

const renderComponent = (props = {}) => mount(
  <Sub {...props} />
);


const renderComponentUsingTheme = (props = {}) => mount(
  <BootstrapProvider>
    <Sub {...props} />
  </BootstrapProvider>
);


describe('<Sub />', () => {
  it('should render an <Sub> tag without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.find('sub').length).toBe(1);
  });
  it('should render a <Sub> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.find('sub').length).toBe(1);
  });
});
