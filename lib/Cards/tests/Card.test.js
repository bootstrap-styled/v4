"use strict";

var _enzyme = require("enzyme");

var _react = _interopRequireDefault(require("react"));

var _BootstrapProvider = _interopRequireDefault(require("@bootstrap-styled/provider/lib/BootstrapProvider"));

var _Card = _interopRequireDefault(require("../Card"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Testing our Card component
 */
var children = _react.default.createElement("h1", null, " test ");

var renderComponent = function renderComponent() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.mount)(_react.default.createElement(_Card.default, props));
};

var renderComponentUsingTheme = function renderComponentUsingTheme() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.mount)(_react.default.createElement(_BootstrapProvider.default, null, _react.default.createElement(_Card.default, props)));
};

describe('<Card />', function () {
  it('should render an <Card> tag without a theme', function () {
    var renderedComponent = renderComponent({
      children: children
    });
    expect(renderedComponent.find('CardUnstyled').length).toBe(1);
  });
  it('should have children without a theme', function () {
    var renderedComponent = renderComponent({
      children: children
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render an <Card> tag with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children
    });
    expect(renderedComponent.find('Card').length).toBe(1);
  });
  it('should render an <Card> tag with a theme wtihout stlying props', function () {
    var renderedComponent = renderComponentUsingTheme();
    expect(renderedComponent.find('Card').props().color).toBe(undefined);
    expect(renderedComponent.find('Card').props().inverse).toBe(undefined);
    expect(renderedComponent.find('Card').props().block).toBe(undefined);
  });
  it('should have an attribute inverse with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      inverse: true
    });
    expect(renderedComponent.find('Card').props().inverse).toBe(true);
  });
  it('should have an attribute color with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      color: 'primary'
    });
    expect(renderedComponent.find('Card').props().color).toBe('primary');
  });
  it('should have an attribute block with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      block: true
    });
    expect(renderedComponent.find('Card').props().block).toBe(true);
  });
  it('should have children with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});