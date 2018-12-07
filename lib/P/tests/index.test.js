"use strict";

var _enzyme = require("enzyme");

var _react = _interopRequireDefault(require("react"));

var _BootstrapProvider = _interopRequireDefault(require("@bootstrap-styled/provider/lib/BootstrapProvider"));

var _index = _interopRequireDefault(require("../index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Testing our P component
 */
var children = _react.default.createElement("span", null, "test");

var renderComponent = function renderComponent() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.mount)(_react.default.createElement(_index.default, props, props.children));
};

var renderComponentUsingTheme = function renderComponentUsingTheme() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.mount)(_react.default.createElement(_BootstrapProvider.default, null, _react.default.createElement(_index.default, props, props.children)));
};

describe('<P />', function () {
  it('should render an <P> tag without a theme', function () {
    var renderedComponent = renderComponent({
      children: children
    });
    expect(renderedComponent.find('PUnstyled').length).toBe(1);
  });
  it('should have children without a theme', function () {
    var renderedComponent = renderComponent({
      children: children
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render a <p> tag with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children
    });
    expect(renderedComponent.find('P').length).toBe(1);
  });
  it('should have a class lead with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      lead: true
    });
    expect(renderedComponent.find('p').hasClass('lead')).toBe(true);
  });
  it('should have a class text-info with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      color: 'info'
    });
    expect(renderedComponent.find('p').hasClass('text-info')).toBe(true);
  });
  it('should have children with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});