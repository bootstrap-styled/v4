/**
 * Testing our TetherContent component
 */

import { mount } from 'enzyme';
import React from 'react';
import Tether from 'tether-fix';
import TetherContent from '../index';

const children = <p id="content">Test</p>;
const functionTest = jest.fn();
const tetherConfig = {
  attachment: 'top center',
};
const renderComponent = (props = {}) => mount(

  <TetherContent
    className={props.className}
    tether={{ ...tetherConfig, ...props.tether }}
    tetherRef={props.tetherRef}
    isOpen={props.isOpen}
    toggle={functionTest}
  >
    {props.children}
  </TetherContent>
);

describe('<TetherContent />', () => {
  let target;

  beforeEach(() => {
    target = document.createElement('div');
    target.innerHTML = 'I\'m a target!';
    document.body.appendChild(target);
  });

  afterEach(() => {
    document.body.removeChild(target);
    target = null;
  });

  it('should render an <Output> tag without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.length).toBe(1);
  });

  it('should render children somewhere in the DOM', () => {
    const renderedComponent = renderComponent({
      children,
      isOpen: true,
      tether: { target },
    });

    let content = document.getElementById('content');
    expect(content).not.toBeNull();

    renderedComponent.setProps({ isOpen: false });
    content = document.getElementById('content');
    expect(content).toBeNull();
  });

  // If the component's render() method isn't called before Tether is called to
  // position the attached element, it will use the bounds of an empty div for
  // calculations, resulting in incorrect alignment once content is rendered.
  // This was the crux of the issue #69.
  it('should render children before calling show()', () => {
    const renderedComponent = renderComponent({
      children,
      tether: { target },
    });

    const position = jest.spyOn(Tether.prototype, 'position')
      .mockImplementation(() => {
        const content = document.getElementById('content');
        expect(content).not.toBeNull();
      });

    renderedComponent.setProps({ isOpen: true });
    expect(position).toHaveBeenCalled();

    position.mockRestore();
  });
});
