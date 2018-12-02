/**
 * Testing our Output component
 */
import { mount } from 'enzyme';
import React from 'react';
import BootstrapProvider from '@bootstrap-styled/provider/lib/BootstrapProvider';

import Output from '../index';

const renderComponent = (props = {}) => mount(

  <Output
    className={props.className}
    htmlFor={props.htmlFor}
    form={props.form}
    name={props.name}
  />
);

const renderComponentUsingTheme = (props = {}) => mount(
  <BootstrapProvider>
    <Output
      className={props.className}
      htmlFor={props.htmlFor}
      form={props.form}
      name={props.name}
    />
  </BootstrapProvider>
);

describe('<Output />', () => {
  it('should render an <Output> tag without a theme', () => {
    const renderedComponent = renderComponent({
    });
    expect(renderedComponent.find('OutputUnstyled').length).toBe(1);
  });
  it('should render an <Output> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
    });
    expect(renderedComponent.find('output').length).toBe(1);
    expect(renderedComponent.find('Output').length).toBe(1);
  });
  it('should have an attribute htmlFor with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      htmlFor: 'a b',
    });
    expect(renderedComponent.find('output').props().htmlFor).toBe('a b');
  });
  it('should have an attribute form with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      form: 'form-test',
    });
    expect(renderedComponent.find('output').props().form).toBe('form-test');
  });
  it('should have an attribute name with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      name: 'name-test',
    });
    expect(renderedComponent.find('output').props().name).toBe('name-test');
  });
});
