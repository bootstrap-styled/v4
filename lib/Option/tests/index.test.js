"use strict";

var _enzyme = require("enzyme");

var _react = _interopRequireDefault(require("react"));

var _BootstrapProvider = _interopRequireDefault(require("@bootstrap-styled/provider/lib/BootstrapProvider"));

var _index = _interopRequireDefault(require("../index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Testing our Option component
 */
var children = 'test';

var renderComponent = function renderComponent() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.mount)(_react.default.createElement("select", null, _react.default.createElement(_index.default, null, props.children)));
};

var renderComponentUsingTheme = function renderComponentUsingTheme() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.mount)(_react.default.createElement(_BootstrapProvider.default, null, _react.default.createElement("select", null, _react.default.createElement(_index.default, null, props.children))));
};

describe('<Option />', function () {
  it('should render an <Option> tag without a theme', function () {
    var renderedComponent = renderComponent({
      children: children
    });
    expect(renderedComponent.find('option').length).toBe(1);
  });
  it('should have text node without a theme', function () {
    var renderedComponent = renderComponent({
      children: children
    });
    expect(renderedComponent.find('option').text()).toEqual(children);
  });
  it('should render an <Option> tag with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children
    });
    expect(renderedComponent.find('option').length).toBe(1);
  }); // it('should have an attribute selected with a theme', () => {
  //   const renderedComponent = renderComponentUsingTheme({
  //     children,
  //     selected: true,
  //   });
  //   expect(renderedComponent.find('option').props().selected).toBe(true);
  // });
  // it('should have a class .disabled with a theme', () => {
  //   const renderedComponent = renderComponentUsingTheme({
  //     children,
  //     disabled: true,
  //   });
  //   expect(renderedComponent.find('option').hasClass('disabled')).toBe(true);
  // });
  // it('should have an attribute label with a theme', () => {
  //   const renderedComponent = renderComponentUsingTheme({
  //     children,
  //     label: 'test-label',
  //   });
  //   expect(renderedComponent.find('option').props().label).toBe('test-label');
  // });
  // it('should have an attribute value with a theme', () => {
  //   const renderedComponent = renderComponentUsingTheme({
  //     children,
  //     value: 'test-value',
  //   });
  //   expect(renderedComponent.find('option').props().value).toBe('test-value');
  // });

  it('should have text node with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children
    });
    expect(renderedComponent.find('option').text()).toEqual(children);
  });
});