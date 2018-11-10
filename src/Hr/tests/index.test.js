/**
 * Testing our Hr component
 */
import { ThemeProvider } from 'styled-components';

import { mount } from 'enzyme';
import React from 'react';
import theme from '../../theme';
import Hr from '../index';

const renderComponent = (props = {}) => mount(
  <Hr
    className={props.className}
  />
);


const renderComponentUsingTheme = (props = {}) => mount(
  <ThemeProvider theme={theme}>
    <Hr
      className={props.className}
    />
  </ThemeProvider>
);


describe('<Hr />', () => {
  it('should render an <Hr> tag without a theme', () => {
    const renderedComponent = renderComponent({
    });
    expect(renderedComponent.find('hr').length).toBe(1);
  });
  it('should render a <hr> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
    });
    expect(renderedComponent.find('hr').length).toBe(1);
  });
});
