/**
 * Testing our Thead component
 */

import React from 'react';
import { mount } from 'enzyme';
import Thead from '../Thead';


const children = <span> test </span>;
const renderComponent = () => mount(
  <Thead>
    {children}
  </Thead>
);

describe('<Thead />', () => {
  it('should render a <Thead> tag without a theme', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('thead').length).toBe(1);
  });
  it('should have children without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
