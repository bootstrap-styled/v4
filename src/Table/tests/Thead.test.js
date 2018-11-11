/**
 * Testing our Thead component
 */

import React from 'react';
import { mount } from 'enzyme';
import Thead from '../Thead';
import Table from '../index';

const renderComponent = () => mount(
  <Table>
    <Thead>
      <tr>
        <th>
          test
        </th>
      </tr>
    </Thead>
  </Table>
);

describe('<Thead />', () => {
  it('should render a <Thead> tag without a theme', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('thead').length).toBe(1);
  });
});
