/**
 * Testing our Th component
 */

import React from 'react';
import { mount } from 'enzyme';
import Th from '../Th';
import Table from '../index';

const renderComponent = (props) => mount(
  <Table>
    <thead>
      <tr>
        <Th {...props}>
          test
        </Th>
      </tr>
    </thead>
  </Table>
);

describe('<Th />', () => {
  it('should render a <Th> tag without a theme', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('th').length).toBe(1);
  });
  it('should have a className table-active', () => {
    const renderedComponent = renderComponent({
      color: 'active',
    });
    expect(renderedComponent.find('th').hasClass('table-active')).toBe(true);
  });
});
