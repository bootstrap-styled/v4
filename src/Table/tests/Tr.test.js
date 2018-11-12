/**
 * Testing our Tr component
 */

import React from 'react';
import { mount } from 'enzyme';
import Tr from '../Tr';
import Table from '../index';

const renderComponent = (props) => mount(
  <Table>
    <thead>
      <Tr {...props}>
        <th>
          test
        </th>
      </Tr>
    </thead>
  </Table>
);

describe('<Tr />', () => {
  it('should render a <Tr> tag without a theme', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('tr').length).toBe(1);
  });
  it('should have a className table-active', () => {
    const renderedComponent = renderComponent({
      color: 'active',
    });
    expect(renderedComponent.find('tr').hasClass('table-active')).toBe(true);
  });
});
