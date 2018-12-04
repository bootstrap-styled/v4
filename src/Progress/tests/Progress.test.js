/**
 * Testing our Progress component
 */
import { mount } from 'enzyme';
import React from 'react';
import BootstrapProvider from '@bootstrap-styled/provider/lib/BootstrapProvider';

import Progress from '../index';
import ProgressBar from '../ProgressBar';

const renderComponent = (props = {}) => mount(
  <Progress>
    {props.children}
  </Progress>
);

const renderComponentUsingTheme = (props = {}) => mount(
  <BootstrapProvider>
    <Progress>
      {props.children}
    </Progress>
  </BootstrapProvider>
);

describe('<Progress />', () => {
  it('should render an <Progress> tag without a theme', () => {
    const renderedComponent = renderComponent({
      children: <ProgressBar />,
    });
    expect(renderedComponent.find('ProgressUnstyled').length).toBe(1);
  });
  it('should render a <Progress> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children: <ProgressBar />,
    });
    expect(renderedComponent.find('Progress').length).toBe(1);
  });
});
