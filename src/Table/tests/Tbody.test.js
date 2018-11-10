/**
 * Testing our Tbody component
 */

import React from 'react';
import { mount } from 'enzyme';
import Tbody from '../Tbody';

const children = <span> test </span>;
const renderComponent = () => mount(
  <Tbody>
    {children}
  </Tbody>
);

describe('<Tbody />', () => {
  it('should render a <Tbody> tag without a theme', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('tbody').length).toBe(1);
  });
  it('should have children without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
