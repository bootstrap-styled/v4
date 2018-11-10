import { mount } from 'enzyme';
import React from 'react';

import IssueIcon from '../index';

describe('<IssueIcon />', () => {
  it('should render a SVG', () => {
    const renderedComponent = mount(
      <IssueIcon />
    );
    expect(renderedComponent.find('svg').length).toEqual(1);
  });
});
