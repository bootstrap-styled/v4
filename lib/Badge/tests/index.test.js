"use strict";

var _enzyme = require("enzyme");

var _react = _interopRequireDefault(require("react"));

var _BootstrapProvider = _interopRequireDefault(require("@bootstrap-styled/provider/lib/BootstrapProvider"));

var _index = _interopRequireDefault(require("../index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Testing our Badge component
 */
var children = _react.default.createElement("h1", null, "Test");

var renderComponent = function renderComponent() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.mount)(_react.default.createElement(_index.default, props));
};

var renderComponentUsingTheme = function renderComponentUsingTheme() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.mount)(_react.default.createElement(_BootstrapProvider.default, null, _react.default.createElement(_index.default, props)));
};

describe('<Badge />', function () {
  it('should render an <Badge> tag without a theme', function () {
    var renderedComponent = renderComponent();
    expect(renderedComponent.find('BadgeUnstyled').length).toBe(1);
  });
  it('should have an attribute pill without a theme', function () {
    var renderedComponent = renderComponent({
      pill: true
    });
    expect(renderedComponent.find('BadgeUnstyled').props().pill).toBe(true);
  });
  it('should have children without a theme', function () {
    var renderedComponent = renderComponent({
      children: children
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render an <Tag> tag with a theme', function () {
    var renderedComponent = renderComponentUsingTheme();
    expect(renderedComponent.find('span').length).toBe(1);
    expect(renderedComponent.find('Badge').length).toBe(1);
  });
  it('should have an attribute pill with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      pill: true
    });
    expect(renderedComponent.find('Badge').props().pill).toBe(true);
  });
  it('should render a classList attribute of <tag> tag with a theme', function () {
    var renderedComponent = renderComponentUsingTheme();
    expect(renderedComponent.find('span').hasClass('badge')).toEqual(true);
  });
  it('should have children with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});