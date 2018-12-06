"use strict";

var _enzyme = require("enzyme");

var _react = _interopRequireDefault(require("react"));

var _BootstrapProvider = _interopRequireDefault(require("@bootstrap-styled/provider/lib/BootstrapProvider"));

var _index = _interopRequireDefault(require("../index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Testing our Li component
 */
var children = _react.default.createElement("h1", null, " test ");

var renderComponent = function renderComponent() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.mount)(_react.default.createElement(_index.default, props, children));
};

var renderComponentUsingTheme = function renderComponentUsingTheme() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.mount)(_react.default.createElement(_BootstrapProvider.default, null, _react.default.createElement(_index.default, props, children)));
};

describe('<Li />', function () {
  it('should render an <Li> tag without a theme', function () {
    var renderedComponent = renderComponent({
      children: children
    });
    expect(renderedComponent.find('LiUnstyled').length).toBe(1);
  });
  it('should have children without a theme', function () {
    var renderedComponent = renderComponent({
      children: children
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render an <Li> tag with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children
    });
    expect(renderedComponent.find('Li').length).toBe(1);
    expect(renderedComponent.find('li').length).toBe(1);
  });
  it('should have a class .dropdown-divider with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      separator: true
    });
    expect(renderedComponent.find('li').hasClass('dropdown-divider')).toBe(true);
  });
  it('should have a class .dropdown-item with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      'dropdown-item': true
    });
    expect(renderedComponent.find('li').hasClass('dropdown-item')).toBe(true);
  });
  it('should have a class .dropdown-header with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      'dropdown-header': true
    });
    expect(renderedComponent.find('li').hasClass('dropdown-header')).toBe(true);
  });
  it('should have a class list-inline-item with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      inline: true
    });
    expect(renderedComponent.find('li').hasClass('list-inline-item'));
  });
  it('should have a class media with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      media: true
    });
    expect(renderedComponent.find('li').hasClass('media'));
  });
  it('should have a class .dropdown-footer with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      'dropdown-footer': true
    });
    expect(renderedComponent.find('li').hasClass('dropdown-footer')).toBe(true);
  });
  it('should have children with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});