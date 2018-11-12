/**
 * Testing our InputGroupButton component
 */
import { mount } from 'enzyme';
import React from 'react';
import BootstrapProvider from '@bootstrap-styled/provider/lib/BootstrapProvider';
import InputGroupButton from '../InputGroupButton';
const children = (<h1>Test</h1>);

const renderComponent = (props = {}) => mount(
  <InputGroupButton>
    {props.children}
  </InputGroupButton>
);


const renderComponentUsingTheme = (props = {}) => mount(
  <BootstrapProvider>
    <InputGroupButton>
      {props.children}
    </InputGroupButton>
  </BootstrapProvider>
);


describe('<InputGroupButton />', () => {
  it('should render an <InputGroupButton> tag without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.find('div').length).toBe(1);
  });
  it('should have children without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render a <InputGroupButton> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.find('InputGroupButton').length).toBe(1);
  });
  it('should have children with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should have class input-group-btn', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.find('div').at(1).hasClass('input-group-btn')).toBe(true);
  });
  describe('Shorthand usage', () => {
    it('should render a child Button', () => {
      const wrapper = mount(<InputGroupButton>Yo!</InputGroupButton>);
      expect(wrapper.find('Button').length).toBe(1);
    });

    it('should render the string provided in the child Button', () => {
      const wrapper = mount(<InputGroupButton>Yo!</InputGroupButton>);
      expect(wrapper.find('button').prop('children')).toBe('Yo!');
    });

    it('should render additional props on the child Button', () => {
      const wrapper = mount(<InputGroupButton color="primary">Yo!</InputGroupButton>);
      expect(wrapper.find('Button').prop('color')).toBe('primary');
    });

    it('should render additional classes on the child Button', () => {
      const wrapper = mount(<InputGroupButton className="yo">Yo!</InputGroupButton>);
      expect(wrapper.find('Button').hasClass('yo')).toBe(true);
    });

    it('should render groupClassName as additional classes on the input-group-btn wrapper', () => {
      const wrapper = mount(<InputGroupButton groupClassName="other">Yo!</InputGroupButton>);
      expect(wrapper.find('div').hasClass('other')).toBe(true);
      expect(wrapper.find('div').hasClass('input-group-btn')).toBe(true);
    });

    it('should render groupAttributes as additional attributes on the input-group-btn wrapper', () => {
      const wrapper = mount(<InputGroupButton groupAttributes={{ style: { textAlign: 'left' } }}>Yo!</InputGroupButton>);
      expect(wrapper.find('div').prop('style').textAlign).toBe('left');
    });
  });
});
