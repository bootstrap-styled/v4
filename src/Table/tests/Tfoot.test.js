/**
 * Testing our Tfoot component
 */

import React from 'react';
import { mount } from 'enzyme';
import Tfoot from '../Tfoot';
import Table from '../index';

const renderComponent = () => mount(
  <Table>
    <Tfoot>
      <tr>
        <th>
          test
        </th>
      </tr>
    </Tfoot>
  </Table>
);

describe('<Tfoot />', () => {
  it('should render a <Tfoot> tag without a theme', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('tfoot').length).toBe(1);
  });
});
