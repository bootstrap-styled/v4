"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _BootstrapProvider = _interopRequireDefault(require("@bootstrap-styled/provider/lib/BootstrapProvider"));

var _index = _interopRequireDefault(require("../index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Testing our Abbr component
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

describe('<Abbr />', function () {
  it('should render an <Abbr> tag without a theme', function () {
    var renderedComponent = renderComponent({
      title: 'abbr title',
      children: children
    });
    expect(renderedComponent.find('AbbrUnstyled').length).toBe(1);
  });
  it('should have an attribute title without a theme', function () {
    var renderedComponent = renderComponent({
      title: 'abbr title',
      children: children
    });
    expect(renderedComponent.props().title).toEqual('abbr title');
  });
  it('should have children without a theme', function () {
    var renderedComponent = renderComponent({
      title: 'abbr title',
      children: children
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render a <abbr> tag with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      title: 'abbr title',
      children: children
    });
    expect(renderedComponent.find('abbr').length).toBe(1);
    expect(renderedComponent.find('Abbr').length).toBe(1);
  });
  it('should have an attribute title with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      title: 'abbr title',
      children: children
    });
    expect(renderedComponent.find('abbr').props().title).toEqual('abbr title');
  });
  it('should have an attribute initialism with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      title: 'abbr title',
      initialism: true,
      children: children
    });
    expect(renderedComponent.find('Abbr').props().initialism).toEqual(true);
  });
  it('should have children with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      title: 'abbr title',
      children: children
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});