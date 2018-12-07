"use strict";

var _enzyme = require("enzyme");

var _react = _interopRequireDefault(require("react"));

var _BootstrapProvider = _interopRequireDefault(require("@bootstrap-styled/provider/lib/BootstrapProvider"));

var _NavLink = _interopRequireDefault(require("../NavLink"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Testing our NavLink component
 */
var children = _react.default.createElement("h1", null, "Test");

var renderComponent = function renderComponent() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.mount)(_react.default.createElement(_NavLink.default, props, props.children));
};

var renderComponentUsingTheme = function renderComponentUsingTheme() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.mount)(_react.default.createElement(_BootstrapProvider.default, null, _react.default.createElement(_NavLink.default, props, props.children)));
};

describe('<NavLink />', function () {
  it('should render an <NavLink> tag without a theme', function () {
    var renderedComponent = renderComponent({
      children: children
    });
    expect(renderedComponent.find('a').length).toBe(1);
  });
  it('should have children without a theme', function () {
    var renderedComponent = renderComponent({
      children: children
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render a <NavLink> tag with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children
    });
    expect(renderedComponent.find('NavLink').length).toBe(1);
  });
  it('should have children with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should handle onClick prop with a theme', function () {
    var functionTest = jest.fn();
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      onClick: functionTest
    });
    renderedComponent.find('a').simulate('click');
    expect(renderedComponent.find('NavLink').props().onClick).toHaveBeenCalled();
  });
  it('should handle onClick events with a theme', function () {
    var functionTest = jest.fn();
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      onClick: functionTest,
      disabled: true
    });
    renderedComponent.find('a').simulate('click');
    expect(renderedComponent.find('NavLink').props().onClick).not.toHaveBeenCalled();
  });
});