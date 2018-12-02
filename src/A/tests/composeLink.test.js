/**
 * Testing our composeList HoC component constructor
 */
import React from 'react';
import BootstrapProvider from '@bootstrap-styled/provider/lib/BootstrapProvider';
import { mount } from 'enzyme';

import A from '../index';
import composeLink from '../composeLink';

const Link = composeLink(A);

const renderComponentUsingTheme = (props) => mount(
  <BootstrapProvider>
    <Link {...props}>test</Link>
  </BootstrapProvider>
);

describe('composeLink', () => {
  it('should render a Link', () => {
    const renderedComponent = renderComponentUsingTheme({
      to: 'http://test.com',
    });
    expect(renderedComponent.find('Link').length).toBe(1);
  });
});
