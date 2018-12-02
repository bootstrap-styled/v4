/**
 * Testing our Alert component
 */
import BootstrapProvider from '@bootstrap-styled/provider/lib/BootstrapProvider';

import { mount } from 'enzyme';
import React from 'react';


import Alert from '../index';

const children = (<h1>Test</h1>);

const renderComponentUsingTheme = (props) => mount(
  <BootstrapProvider>
    <Alert {...props} />
  </BootstrapProvider>
);

describe('<Alert />', () => {
  let onClick;
  let toggle;

  beforeAll(() => {
    onClick = jest.fn();
    toggle = jest.fn();
  });

  it('should render an <Alert> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.find('AlertUnstyled').length).toBe(1);
  });
  it('should have a className .alert by default and with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.find('div').at(1).hasClass('alert')).toBe(true);
  });
  it('should have children with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should have a Close button that closes Alert without a function', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
      uncontrolled: true,
      toggle,
    });
    expect(renderedComponent.find('Fade').props().in).toEqual(true);
    renderedComponent.find('button').simulate('click');
    expect(renderedComponent.find('Fade').props().in).toEqual(false);
  });
  it('should have a autoHideDuration props', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
      autoHideDuration: 500,
    });
    expect(renderedComponent.find('Alert').props().autoHideDuration).toEqual(500);
  });
  it('should send a warninng', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
      autoHideDuration: 500,
      onClick: () => {},
    });
    expect(renderedComponent.find('Alert').props().autoHideDuration).toEqual(500);
  });
  it('should have a toggle function', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
      onClick,
    });
    expect(renderedComponent.find('Close').length).toEqual(1);
    renderedComponent.find('button').simulate('click');
    expect(onClick).toHaveBeenCalled();
  });
});
