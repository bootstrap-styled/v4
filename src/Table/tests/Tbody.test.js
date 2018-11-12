/**
 * Testing our Tbody component
 */

import React from 'react';
import { mount } from 'enzyme';
import Tbody from '../Tbody';
import Table from '../index';

const renderComponent = () => mount(
  <Table>
    <Tbody>
      <tr>
        <td>
          test
        </td>
      </tr>
    </Tbody>
  </Table>
);

describe('<Tbody />', () => {
  it('should render a <Tbody> tag without a theme', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('tbody').length).toBe(1);
  });
});
